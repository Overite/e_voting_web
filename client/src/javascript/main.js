let openSidebar = document.querySelector('.opensidebar')
let closeSidebar = document.querySelector('.closesidebar')
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('.header');



openSidebar?.addEventListener('click',function(){
  sidebar.style.left ='0';
  header.style.left = '313px'
})

closeSidebar?.addEventListener('click',function(){
  sidebar.style.left ='-313px';
  header.style.left = '0'
})

const faceId = (elId,msg)=>{
  const fname = 'victor'
  let elementId = document.getElementById(elId);
  let btn = elementId;
  btn?.addEventListener('click', function(){
  if(fname === 'victor'){
    // console.log(msg)
    elementId.textContent = msg;
  }else {
    elementId.textContent = msg;
  }
  })
}
faceId("facialIcon","hello victor")

document.addEventListener('DOMContentLoaded', function(){
  const currentLocation = window.location.href;
  const sidebarIcons = document.querySelectorAll('img')
  const sidebarlinks = document.querySelectorAll('li a');

  sidebarlinks.forEach((link)=>{
    if(link.href === currentLocation){
      link.classList.add('active')
    }
  })

  sidebarIcons.forEach((img)=>{
    if(img.src){
      img.classList.add('image')
    }
  })
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


document.getElementById('searchInput')?.addEventListener('input',function(e){
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

document.addEventListener('DOMContentLoaded', () => {
const loginForm = document.getElementById('loginForm');
loginForm?.addEventListener('submit', (e) => {
  // console.log('hello word')

    e.preventDefault();
    function errorInput(elementId,message){
      const errorElementId = document.getElementById(elementId);
      errorElementId.textContent = message;
      errorElementId.style.display = 'block';  
      setTimeout(() => {
        errorElementId.style.display = 'none'
      }, 2000);
    }

    function ThankYou(eId,text){
      const markId = document.getElementById(eId);
      markId.textContent = text;
      markId.style.display = 'block';  
      setTimeout(() => {
        markId.style.display = 'none'
      }, 2000);
    }

    function clearError(elementId){
      const clearElementId = document.getElementById(elementId);
      clearElementId.textContent = '';
    }

    
    
    clearError('admin')
    clearError('password')

    const admin = document.getElementById('admin');
    const password = document.getElementById('password');
    const adminInput = admin.value;
    const passwordInput = password.value;

    const toggleInput = document.getElementById('togglePassword');
    toggleInput.addEventListener('click', ()=>{
    // const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    // password.setAttribute('type', type);
    // toggleInput.src = type === 'password' ? './src/assets/icons/eye-slash.svg' :'./src/assets/icons/eye-regular.svg';
    console.log("victor")
    })

if(!adminInput){
  errorInput('errorInput', 'Admin is required')
  return;
}
    
if(!passwordInput){
  errorInput('errorInput', 'password is required')
  return;
}

if(adminInput && passwordInput){
  ThankYou('markInput', 'you are logging in')
  window.location=`dashboard.html`;
  return
}
  })
})

// const headerItems = [
//   {
//     headTitle:"Dashboard",
//   },
//   {
//     headTitle:"Register voting",
//   },
//   {
//     headTitle:"Voters",
//   }
// ]

// const displayHeader = (header) => {
//   const headerContainer = document.querySelector('header')
//   headerContainer.innerHTML = `  
//   <header class="header">
//   <div class="header-row">
//       <img src="./src/assets/icons/menu.svg" class="opensidebar" alt="menu">
//       <h3 class="header-row--title">${header?.headTitle}</h3>
//   </div>
//   <div class="header-row--metamask">
//       <select name="connect" id="">
//           <option value="connect">Connected</option>
//       </select>
//       <div class="">
//           <img src="./src/assets/icons/chevron-down.svg" alt="">
//       </div>
//   </div>
//   </header>
//   `;
// }

// displayHeader(headerItems)

const displayUserDetail = (user) => {
  const userDetails = document.getElementById('userDetails')
  userDetails.innerHTML = `<img src="${user.image}" height="40" width="40" alt="${user.fullName}" class="user-img">`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Full Name:</h2><h3 style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.fullName}</h3></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Voter's Identification Number:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.VotersId}</p></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Date Of Birth:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.dateOfBirth}</p></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Date Of Registration:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.dateOfReg}</p></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Occupation:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.Occupation}</p></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Gender:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.Gender}</p></div>`;
  userDetails.innerHTML += `<div style="display:flex;flex-direction:column"><h2 style="font-size:16px;font-weight:700;line-height:18.38px;">Address:</h2><p style="font-size:16px;font-weight:400;line-height:18.38px;color:#0C0908;">${user.address}</p></div>`;
  userDetails.innerHTML += `<img src="${user.qrcode}" alt="${user.fullName}" class="user-img">`;
}



