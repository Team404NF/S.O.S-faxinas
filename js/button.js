const button = document.querySelector(".contact");
const contacts = document.querySelector(".contacts");

button.addEventListener("click", (event)=>{
   contacts.classList.toggle("contactsAct");
});