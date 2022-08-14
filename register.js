const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".submit");
const form = document.querySelector(".form");
const password = document.querySelector(".pass.element");
const confirmPassword = document.querySelector(".confirm.element")
const username = document.querySelector(".user.element")



inputs.forEach((input) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (input.value === "") {
            input.style.outline ="2px solid red"
            input.addEventListener("keydown", () => {
                input.style.outline = "none";
            });
        }
    });
  
    input.addEventListener("focus", (e) => {
        const responds = document.querySelector(".responds")
        if (e.target !== password && username.nextElementSibling === responds) {
            if (containspecialcharacter.test(password.value) && password.value.length > 6) {
                responds.remove(); 
            }
        } 
    })
    input.addEventListener("focus", (e) => {
        const responds2 = document.querySelector(".responds2")
        if (e.target !== confirmPassword && password.nextElementSibling === responds2 ) {
            if (confirmPassword.value === password.value) {
               responds2.remove();  
            }
        }  
    })
});

password.addEventListener("keyup", (e) => {
    const value = password.value;
    console.log(value);
    const responds = document.querySelector(".responds")
    if (value.length <= 3) {
        if (!responds) {
            const responds = document.createElement("small");
            responds.className = "responds";
            responds.innerText = "Password too short"
            form.insertBefore(responds, password)
        }
    } else if (!containspecialcharacter.test(value)) {
        if (typeof (responds) != "undefined" && responds != null) {
            responds.innerText = "Password must contain special characters"
        }
    } else if (containspecialcharacter.test(value) && value.length > 6) {
        if (typeof (responds) != "undefined" && responds != null) {
            responds.innerText = "Password Strong";
            responds.classList.add("correct");
        }
    }
});

const containspecialcharacter = /[!{@#$%^&*,_-]/

confirmPassword.addEventListener("keyup", validatePassword)

function validatePassword() {
    if (confirmPassword.value !== password.value) {
        const responds2 = document.querySelector(".responds2")
        if (!responds2) {
            const responds2 = document.createElement("small");
            responds2.className = "responds2";
            responds2.innerText = "Password incorrect"
            form.insertBefore(responds2, confirmPassword)
        }
    } else {
         const responds2 = document.querySelector(".responds2")
        if (responds2) {
            responds2.innerText = "Password correct";
            responds2.classList.add("correct")
        }
    }
}

function emptyInput(){
  let user = username.value
  let emptyInputs = [...inputs].filter(each => each.value.trim() == "")
  if(emptyInputs.length === 0) return alert(`Thank you ${username.value} for submitting`)
}

btn.addEventListener("click", emptyInput);
