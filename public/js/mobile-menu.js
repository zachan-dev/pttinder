const navIcon = document.getElementById('mobile-nav-icon');
const navMenu = document.getElementById('mobile-nav-menu');
const nav = document.getElementsByTagName('nav')[0];

navIcon.addEventListener('click', handleMobileMenuClick);

function handleMobileMenuClick()
{
  let isOpen = navMenu.getAttribute('data-open');
  if(isOpen === 'true')
  {
    navMenu.style.display = "";
    navMenu.setAttribute('data-open', 'false');
    navIcon.classList.toggle('fa-times');
    navIcon.classList.toggle('fa-bars');
  }
  else
  {
    navMenu.style.display = "flex";
    let height = window.innerHeight - 2 - nav.getBoundingClientRect().height;
    navMenu.style.height = height + "px";
    navMenu.setAttribute('data-open', 'true');
    navIcon.classList.toggle('fa-times');
    navIcon.classList.toggle('fa-bars');
  }
}