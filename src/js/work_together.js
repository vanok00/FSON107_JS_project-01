import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".feedback-form")
const formButton = document.querySelector(".feedback-button")
const formEmail = document.querySelector(".email-input")
const formComment = document.querySelector(".text-input")
const formData = {email: '', comment:''};
const backdrop = document.querySelector(".backdrop")
const modalWindow = document.querySelector(".modal")
const modalButton = document.querySelector(".close-button")
//  Input save zone
form.addEventListener("input",objIntoString)
function objIntoString(){
    formData.email = formEmail.value.trim()
    formData.comment = formComment.value.trim()
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}
const  strIntoObj = JSON.parse(localStorage.getItem('feedback-form-state'))
if(strIntoObj !== null){
    formComment.value = strIntoObj.comment
    formEmail.value = strIntoObj.email
}
// Form sumbit
form.addEventListener("submit",sumbitAction)
 async function sumbitAction(event){
    event.preventDefault();
// Axios
    if(formEmail.value !=='' && formComment.value !==''){
        formData.email = formEmail.value.trim()
        formData.comment = formComment.value.trim()
        axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
    try{
        const closeModal = () => {
            modalWindow.classList.remove("is-open");
            backdrop.classList.remove("is-open");
          };
        const resp = await axios.post('/requests',{email:formEmail.value.trim(), comment:formComment.value.trim()})
        modalButton.addEventListener("click", closeModal)
        backdrop.addEventListener("click",closeModal)
        console.log(resp);
        backdrop.classList.add("is-open")
        modalWindow.classList.add("is-open")
        iziToast.success({
            position:"topRight",
            message:'Succeed!'
        })
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
              closeModal();
            }
          });
    } catch(error){
        console.log(error);;
        iziToast.error({
            position:'topRight',
            message:'Error.Please try again!'
        })
    }
        localStorage.removeItem('feedback-form-state')
        formEmail.value = '';
        formComment.value = '';
        // console.log(formData);
    }
    else
    iziToast.error({
      position:'topRight',
      message:'Fill please all fields!!!'
          })
}