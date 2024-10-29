
// a. Handle Form Submission with preventDefault()
const form = document.getElementById('form')
form.addEventListener('submit', function(element){
    element.preventDefault()
    console.log('Form submitted!');
});


// b. Toggle Background Color of <div> Elements