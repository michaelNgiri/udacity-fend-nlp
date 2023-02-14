function checkForName() {
    const name = document.getElementById('name').value;
    if (nameIsValid(name)) {
        console.log("::: Running checkForName :::", name);
        document.getElementById('welcome').style.color = "grey";
        document.getElementById('welcome').innerHTML = `Welcome ${name}! hang on while we process your request...`
    }
    
}

 
const nameIsValid = (name)=> {
    if (name == undefined || name == '') {
        return false
    }
    return true
}

export { checkForName, nameIsValid }
