const $open = document.getElementById("open");

// console.log($open);

const $close =document.getElementById("close");
const $nav = document.getElementById("nav");

// console.log($nav);

// console.log($close, $open);
function open () {
      $nav.style.width = "100%";
      $nav.classList.toggle("show");

      $nav.classList.remove("hide");
}

function close() {
      $nav.classList.remove("show");
      $nav.style.width = "0%";
      $nav.classList.add("hide");
}

$open.addEventListener("click",open);

$close.addEventListener("click",close);






function error(inerr, msg) {
      document.getElementById(inerr).textContent = msg;
    }
    
    const validate = ( ) => {
    
        let email = document.getElementById("email").value;
    
    
    
        let emailerror = true;
    
        
    
        if (email.indexOf("@") && email.lastIndexOf(".")) {
            if (email.indexOf("@") < 1 || email.indexOf("@") + 2 > email.lastIndexOf(".") || email.indexOf("@").length <= email.lastIndexOf(".") + 2) {
              error("emailerror", "Please enter a valid email address");

              
            } else {
              error("emailerror", "");
    
              emailerror = false;
            }
        }
    
        if(emailerror === true) {
           return false;
        }
    
    
    
    }
    