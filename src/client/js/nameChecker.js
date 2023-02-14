function checkForName() {
    const name = document.getElementById('name').value;
    if (name == undefined) {
        return 'name field is empty'
    }
    console.log("::: Running checkForName :::", name);
    document.getElementById('welcome').style.color = "grey";
    document.getElementById('welcome').innerHTML = `Welcome ${name}! hang on while we process your request...`
}

export { checkForName }
