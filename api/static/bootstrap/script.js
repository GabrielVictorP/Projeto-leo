document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("email-link");
    const copiedEmailMessage = document.getElementById("copied-email-message");

    emailLink.addEventListener("click", function (event) {
        event.preventDefault();
        const emailAddress = emailLink.getAttribute("href").split(":")[1];
        copyToClipboard(emailAddress);
        copiedEmailMessage.style.display = "block";
        setTimeout(function () {
            copiedEmailMessage.style.display = "none";
        }, 2000);
    });

    const phoneIcon = document.getElementById("phone-icon");
    const copiedPhoneMessage = document.getElementById("copied-phone-message");

    const phoneNumber = "+553598857-7680"; // Seu número de telefone

    phoneIcon.addEventListener("click", function (event) {
        event.preventDefault();
        copyToClipboard(phoneNumber);
        copiedPhoneMessage.style.display = "block";
        setTimeout(function () {
            copiedPhoneMessage.style.display = "none";
        }, 2000);
    });
});

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
}

animeScroll();

window.addEventListener("scroll", ()=> {
    animeScroll();
})

const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoad = document.querySelector('#btn-enviar-load')

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoad.style.display = "block";
    btnEnviar.style.display = "none"
  })
  
  setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
  }, 8000)