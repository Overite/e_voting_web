const getQueryParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return Object.fromEntries(urlParams.entries())
}

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

const displayUserDetail = (user) => {
const userDetails = document.getElementById('userDetails')
userDetails.innerHTML = `<img src="${user.image}" alt="${user.fullName}" class="user-img">`;
userDetails.innerHTML += `<h3>${user.fullName}</h3>`;
userDetails.innerHTML += `<p>${user.dateOfBirth}</p>`;
userDetails.innerHTML += `<p>${user.dateOfReg}</p>`;
userDetails.innerHTML += `<p>${user.Occupation}</p>`;
userDetails.innerHTML += `<p>${user.Gender}</p>`;
userDetails.innerHTML += `<p>${user.address}</p>`;
userDetails.innerHTML += `<img src="${user.qrcode}" alt="${user.fullName}" class="user-img">`;
}
const queryParams = getQueryParams();
const userId = queryParams.id;

const user = users.find(user =>  user.id == userId)

if (user){
displayUserDetail(user)
} else{
const userDetails = document.getElementById('userDetails');
userDetails.innerHTML = `<p>User not found</p>`
}
