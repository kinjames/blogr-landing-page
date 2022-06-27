const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener ('click', (e) =>{
      const styles = e.currentTarget.classList;
      if(styles.contains('one')){
        document.getElementById("myDropdown").classList.toggle("show");
      }else if(styles.contains('two')){
         document.getElementById("myDropdown1").classList.toggle("show"); 
      }
      else if(styles.contains('three')){
        document.getElementById("myDropdown2").classList.toggle("show");
      }
    })
  })

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const arrow = document.querySelector(".arrow");



hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))