import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// console.log(checkForName);

// alert("I EXIST")
// console.log("CHANGE!!");
export { handleSubmit, checkForName };

const submitBTN = document.getElementById("submit")
submitBTN.addEventListener("click", checkForName);
submitBTN.addEventListener("click", handleSubmit);