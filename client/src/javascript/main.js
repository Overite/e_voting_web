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

document.addEventListener('DOMContentLoaded', function(){
  const currentLocation = window.location.href;
  const sidebarlinks = document.querySelectorAll('li a');

  sidebarlinks.forEach((link)=>{
    if(link.href === currentLocation){
      link.classList.add('active')
    }
  })
})


