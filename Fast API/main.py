from fastapi import FastAPI

app = FastAPI()


@app.get("/home")

def write_home():
    return{
        "Name": "Sandeep Kumar",
        "age": 20
    }