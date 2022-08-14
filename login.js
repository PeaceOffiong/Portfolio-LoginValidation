const email = document.querySelector(".email.element");
const password = document.querySelector(".password.element");
const result1 = document.querySelector(".result1");
const submit = document.querySelector(".submit.btn")


const people = {
    "peaceyben@gmail.com": {
        firstName: "peace",
        lastName: "offiong",
        email: "peaceyben@gmail.com",
        profession:"UX Engineer",
        password: "peace123"
    },
    "adalovelace@gmail.com": {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "adalovelace@gmail.com",
        profession: "Computer programmer",
        password: "12345Ada"
    },
    "yemi_adebisi@gmail.com": {
        firstName: "Yemi",
        lastName: "Adebisi",
        email: "yemi_adebisi@gmail.com",
        profession: "Software Engineer",
        password: "12345Yemi"
    },
}

// disableSubmitBtnAtFirstInstance()

email.addEventListener("keyup", validateEmail);
submit.addEventListener("click", submission);


function validateEmail() {
    const input = email.value;
    if (input.includes(".com")) {
        const userdetails = people[input];
        if (!userdetails) {
            displayResultEmailError();
            setTimeout(displayOver2, 1000);
        } else if (userdetails) {
            displayResultEmailCorrect();
            setTimeout(displayOver, 1000);
        }
    }
};

function displayResultEmailCorrect() {
    result1.classList.add("green");
    result1.classList.add("show");
    result1.innerHTML = "<small>user found</small>";
}

function displayOver() {
    result1.classList.remove("green");
    result1.classList.remove("show");
    result1.innerText = "";
}

function displayOver2() {
    result1.classList.remove("red");
    result1.classList.remove("show");
    result1.innerText = "";
}

function displayResultEmailError(){
    result1.classList.add("red");
    result1.classList.add("show");
    result1.innerHTML = "<small>user not found, please check if your email is correct</small>";
}

function submission(event) {
   event.preventDefault()
    if (email.value === "" && password.value === "") {
        submit.classList.add("disable");
    } else if (email.value === "" || password.value === "") {
        submit.classList.add("disable");
        password.value = "";
        password.addEventListener("keydown", disableRemoved);
        email.addEventListener("keydown", disableRemoved)
    } else{
        submit.classList.remove("disable");
    }
    updateDataOnConsole()
    clearinput();
}

function disableRemoved() {
    submit.classList.remove("disable");
}

function clearinput() {
    email.value = "";
    password.value = "";
}

function updateDataOnConsole() {
    const input = email.value;
    console.log(input)
    const passwordInput = password.value;
    console.log(passwordInput);
    const userdetails = people[input];
    console.log(userdetails);
    if (!userdetails) {
        alert(`user ${input} not found`);

        return   
    }
    if ( userdetails && userdetails.password !== passwordInput) {
            alert(`password incorrect`)
    }
    if (userdetails && userdetails.password === passwordInput) {
        alert(`Showing details for ${input}:\n
        First Name:${userdetails.firstName}\n
        Last Name: ${userdetails.lastName}\n
        Email: ${userdetails.email}\n
        Profession: ${userdetails.profession}`)
    }
}
    