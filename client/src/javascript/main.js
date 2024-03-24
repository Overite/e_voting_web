let openSidebar = document.querySelector('.opensidebar');
let closeSidebar = document.querySelector('.closesidebar');
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('.header');

function setActive(index){
  const menuItems = document.getElementsByClassName('menu-item');

  for (var i = 0; i < menuItems.length; i++){
    if(i === index){
      menuItems[i].classList.add('active')
    } else {
      menuItems[i].classList.remove('active')
    }
  }
}


openSidebar.addEventListener('click',function (){
  sidebar.style.left ='0';
  header.style.left = '313px'
})

closeSidebar.addEventListener('click',()=>{
  sidebar.style.left ='-313px';
  header.style.left = '0'
})

const users = [
  { id:1,
    fullName:"Victor Oricha",
    VotersId:845281385,
    dateOfBirth:'02-11-1975',
    dateOfReg:'12-03-1975',
    Occupation:'Trading',
    Gender:'Female',
    address:'10, mukaila street,sango, ota,ogun state',
    image:'./src/assets/images/Ellipse1.png',
    qrcode:'./src/assets/images/qrcode.png'
  },
  { id:2,
    fullName:"Frank Oricha",
    VotersId:234423423,
    dateOfBirth:'02-11-1975',
    dateOfReg:'12-03-1975',
    Occupation:'fashion designer',
    Gender:'male',
    address:'10, mukaila street,sango, ota,ogun state',
    image:'./src/assets/images/Ellipse1.png',
    qrcode:'./src/assets/images/qrcode.png'
  },
  { id:3,
    fullName:"markus boniface",
    VotersId:845281385,
    dateOfBirth:'02-11-1975',
    dateOfReg:'12-03-1975',
    Occupation:'barber',
    Gender:'male',
    address:'10, mukaila street,sango, ota,ogun state',
    image:'./src/assets/images/Ellipse1.png',
    qrcode:'./src/assets/images/qrcode.png'
  },
  { id:4,
    fullName:"faith omelete",
    VotersId:845281385,
    dateOfBirth:'02-11-1975',
    dateOfReg:'12-03-1975',
    Occupation:'sewer',
    Gender:'Female',
    address:'10, mukaila street,sango, ota,ogun state',
    image:'./src/assets/images/Ellipse1.png',
    qrcode:'./src/assets/images/qrcode.png'
  },
  { id:5,
    fullName:"Loveth faith",
    VotersId:845281385,
    dateOfBirth:'02-11-1975',
    dateOfReg:'12-03-1975',
    Occupation:'teacher',
    Gender:'Female',
    address:'10, mukaila street,sango, ota,ogun state',
    image:'./src/assets/images/Ellipse1.png',
    qrcode:'./src/assets/images/qrcode.png'
  },
]
const filteredUsers = (query) =>{
  return users.filter(user => 
    user.fullName.toLowerCase().includes(query.toLowerCase())
  )
}

const displayUsers = (filteredUsers) => {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  filteredUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.classList.add('user-items')
    listItem.dataset.id = user.id;
    const userImageLink = document.createElement('a');
    userImageLink.href = `userdetail.html?id=${user.id}`;
    const userImage = document.createElement('img')
    const userText = document.createElement('p')
    userImage.src = user.image;
    userImage.alt = user.fullName;
    userImage.classList.add('user-img');
    userImageLink.appendChild(userImage)
    listItem.appendChild(userImageLink)
    listItem.appendChild(document.createTextNode(user.fullName))
    listItem.appendChild(document.createTextNode(user.VotersId))
    userList.appendChild(listItem)
  })
  userList.style.display = 'flex';

}


document.getElementById('searchInput').addEventListener('input',(e)=>{
  const query = e.target.value.trim();
  const userList = document.getElementById('userList')
  // const userDetails = document.getElementById('userDetails')
  if(query === ''){
    userList.style.display ='none';
    // userDetails.style.display = 'none';

  }else {
    const filterUsers = filteredUsers(query)
    displayUsers(filterUsers)
  }
})





// let admin = document.getElementById('admin');
// // let adminInput = admin.value;
// let password = document.getElementById('password');
//     // let passwordInput = password.value;

// var toggleInput = document.getElementById('togglePassword');

// toggleInput.addEventListener('click', function(){
// const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
// password.setAttribute('type', type);
// toggleInput.src = type === 'password' ? './src/assets/icons/eye-slash.svg' :'./src/assets/icons/eye-regular.svg';
// })

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






