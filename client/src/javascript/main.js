let openSidebar = document.querySelector('.opensidebar');
let closeSidebar = document.querySelector('.closesidebar');
let sidebar = document.querySelector('.dashboard-sidebar');
let header = document.querySelector('.dashboard-header');


openSidebar.addEventListener('click',function (){
  sidebar.style.left ='0';
  header.style.left = '313px'
})

closeSidebar.addEventListener('click',()=>{
  sidebar.style.left ='-313px';
  header.style.left = '0'
})


let admin = document.getElementById('admin');
// let adminInput = admin.value;
let password = document.getElementById('password');
    // let passwordInput = password.value;

var toggleInput = document.getElementById('togglePassword');

toggleInput.addEventListener('click', function(){
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
toggleInput.src = type === 'password' ? './src/assets/icons/eye-slash.svg' :'./src/assets/icons/eye-regular.svg';
})

// document.addEventListener('DOMContentLoaded', () => {
// const loginForm = document.getElementById('loginForm');
// loginForm.addEventListener('submit', (e) => {
//   console.log('hello word')
//     e.preventDefault();
//     function errorInput(elementId,message){
//       const errorElementId = document.getElementById(elementId);
//       errorElementId.textContent = message;
//     }
//     function clearError(elementId){
//       const clearElementId = document.getElementById(elementId);
//       clearElementId.textContent = '';
//     }
    
//     clearError('admin')
//     clearError('password')

//     const admin = document.getElementById('admin');
//     const password = document.getElementById('password');
//     const adminInput = admin.value;
//     const passwordInput = password.value;

//     const toggleInput = document.getElementById('togglePassword');
//     toggleInput.addEventListener('click', ()=>{
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     toggleInput.src = type === 'password' ? './src/assets/icons/eye-slash.svg' :'./src/assets/icons/eye-regular.svg';
//     })

// if(!adminInput){
//   errorInput('errorInput', 'Admin is required')
//   return;
// }
    

// if(!passwordInput){
//   errorInput('errorInput', 'password is required')
//   return;
// }

//   })
// })






