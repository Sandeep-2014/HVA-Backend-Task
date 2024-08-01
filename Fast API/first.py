from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

# In-memory storage for user data
user_data = []

# Define the data model for user input
class User(BaseModel):
    fullname: str
    email: str
    gender: str
    comment: Optional[str] = None
    newsletter: Optional[bool] = False

# Set up templates directory
templates = Jinja2Templates(directory="HTML")

# Route to serve the HTML form
@app.get("/", response_class=HTMLResponse)
async def read_form(request: Request):
    return templates.TemplateResponse("contact-form.html", {"request": request})

# Route to handle form submission
@app.post("/submit")
async def submit_form(fullname: str = Form(...), email: str = Form(...), gender: str = Form(...), comment: Optional[str] = Form(None), newsletter: Optional[bool] = Form(False)):
    user = User(fullname=fullname, email=email, gender=gender, comment=comment, newsletter=newsletter)
    user_data.append(user)
    return {"message": "User data stored successfully", "user": user}

# Route to get all user data
@app.get("/users", response_model=List[User])
async def get_users():
    return user_data

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
