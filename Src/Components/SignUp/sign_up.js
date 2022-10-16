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

// Next from Slider JS
let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let x = document.getElementsByClassName("login-register-form-page");
    x[n].style.display = "block";
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

// Next Button
function nextPrev(n) {
    let x = document.getElementsByClassName("login-register-form-page");
    if (n === 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("login-register-form").submit();
        return false;
    }
    showTab(currentTab);
}

// Valid From Input
function validateForm() {
    // getElement()
    let x, y, i, valid = true;
    x = document.getElementsByClassName("login-register-form-page");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value === "") {
            y[i].style.backgroundColor = "#ffdddd";
            y[i].style.borderColor = "red";
            valid = false;
        }
    }
    return valid;
}

// Check valid Handler
function checkValidationHandler(id) {
    let array = ["firstName", "lastName", "register-email", "register-address-1", "register-address-2", "register-city", "register-zip", "register-primaryNo", "register-secondaryNo", "register-group-email", "register-group-address-1", "register-group-address-2",
        "register-group-address-1", "register-group-email", "register-group-address-2", "register-group-city", "register-group-zip", "register-group-primaryNo", "register-group-fax", "register-group-hear", "reset-email"]
    let newItem = array.find(item => {
        return item === id
    })
    console.log(newItem, id)
    if (newItem === id) {
        document.getElementById(id).style.backgroundColor = "transparent"
        document.getElementById(id).style.borderColor = "#CBD5E1";
    }
}






