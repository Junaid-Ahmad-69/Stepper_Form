/*Dropdown Menu Js*/
$('.login-register-dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.login-register-dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.login-register-dropdown-menu').slideUp(300);
});
$('.login-register-dropdown .login-register-dropdown-menu li').click(function () {
    $(this).parents('.login-register-dropdown').find('input').attr('value', $(this).attr('id'));
});


const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-previous");
const steps = document.querySelectorAll(".step");

const form_steps = document.querySelectorAll(".form-step");
let active = 1;

nextButton.addEventListener("click", () => {
    active++;
    if (active > steps.length) {
        active = steps.length
    }
    updateProgress();
})

prevButton.addEventListener("click", () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
})

const updateProgress = () => {
    console.log("step.length =>" + steps.length);
    console.log(active);

    steps.forEach((step, i) => {
        if (i === (active - 1)) {
            step.classList.add("active");
            form_steps[i].classList.add("active");
        } else {
            step.classList.remove("active");
            form_steps[i].classList.remove("active");
        }

    });
    if (active === 1) {
        prevButton.disabled = true;
    } else if (active === steps.length) {
        nextButton.disabled = true;
    } else if (active <= steps.length) {
        nextButton.disabled = false;
        prevButton.disabled = false;
    } else {
        prevButton.disabled = false;
        nextButton.disbaled = false;
    }
}


