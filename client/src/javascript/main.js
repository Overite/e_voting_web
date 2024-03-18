let openSidebar= document.querySelector('.opensidebar');
var closeSidebar = document.querySelector('.closesidebar')
let sidebar = document.querySelector('.dashboard-sidebar');
const header = document.querySelector('.dashboard-header');



openSidebar.addEventListener('click', ()=>{
  sidebar.style.left ='0';
  header.style.left = '313px'
})

closeSidebar.addEventListener('click', ()=>{
  sidebar.style.left ='-313px';
  header.style.left = '0'
})
