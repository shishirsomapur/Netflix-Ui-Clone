let li = document.querySelector('.li-expand')
let ansDiv = document.querySelector('.ans-div')
li.addEventListener('click', () => {
    ansDiv.classList.toggle('vis')
    li.classList.toggle('faq-list-ul-li-margin-bottom')
})

let li1 = document.querySelector('.li-expand1')
let ansDiv1 = document.querySelector('.ans-div1')
li1.addEventListener('click', () => {
    ansDiv1.classList.toggle('vis')
    li1.classList.toggle('faq-list-ul-li-margin-bottom1')
})

let li2 = document.querySelector('.li-expand2')
let ansDiv2 = document.querySelector('.ans-div2')
li2.addEventListener('click', () => {
    ansDiv2.classList.toggle('vis')
    li2.classList.toggle('faq-list-ul-li-margin-bottom2')
})

let li3 = document.querySelector('.li-expand3')
let ansDiv3 = document.querySelector('.ans-div3')
li3.addEventListener('click', () => {
    ansDiv3.classList.toggle('vis')
    li3.classList.toggle('faq-list-ul-li-margin-bottom3')
})

let li4 = document.querySelector('.li-expand4')
let ansDiv4 = document.querySelector('.ans-div4')
li4.addEventListener('click', () => {
    ansDiv4.classList.toggle('vis')
    li4.classList.toggle('faq-list-ul-li-margin-bottom4')
})

let li5 = document.querySelector('.li-expand5')
let ansDiv5 = document.querySelector('.ans-div5')
li5.addEventListener('click', () => {
    ansDiv5.classList.toggle('vis')
    li5.classList.toggle('faq-list-ul-li-margin-bottom5')
})

let emailBox = document.querySelector('.email-box');
let emailInput = document.querySelector('.email-input');
let emailLabel = document.querySelector('.email-label')

emailBox.addEventListener('click', function () {
    emailInput.classList.remove('vis');
    emailLabel.classList.add('email-label-click')
});

document.addEventListener('click', function (event) {
    let isClickInsideEmailBox = emailBox.contains(event.target);
    let isClickInsideEmailInput = emailInput.contains(event.target);

    if (!isClickInsideEmailBox && !isClickInsideEmailInput) {
        emailInput.classList.add('vis');
        emailLabel.classList.remove('email-label-click')
    }
});

let emailBox1 = document.querySelector('.email-box1');
let emailInput1 = document.querySelector('.email-input1');
let emailLabel1 = document.querySelector('.email-label1')

emailBox1.addEventListener('click', function () {
    emailInput1.classList.remove('vis');
    emailLabel1.classList.add('email-label-click1')
});

document.addEventListener('click', function (event) {
    let isClickInsideEmailBox1 = emailBox1.contains(event.target);
    let isClickInsideEmailInput1 = emailInput1.contains(event.target);

    if (!isClickInsideEmailBox1 && !isClickInsideEmailInput1) {
        emailInput1.classList.add('vis');
        emailLabel1.classList.remove('email-label-click1')
    }
});