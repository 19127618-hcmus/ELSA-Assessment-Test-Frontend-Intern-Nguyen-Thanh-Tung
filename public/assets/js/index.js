let selectPrice = 0;

function validatePhoneNumber(phoneNumber) {
    // var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
    if (regex.test(phoneNumber)) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
        return true;
    }
    return false;
}

function checkNull(value) {
    if (value == null || value == '') {
        return true;
    }
    return false;
}

$("#form-smBtn-content").click(function () {
    let checkPhoneNumber = validatePhoneNumber($("#phoneNumber").val());
    let checkEmail = validateEmail($("#email").val());

    //check phone number
    if (!checkPhoneNumber) {
        $("#noti-phone").addClass("show");
    }
    else {
        $("#noti-phone").removeClass("show");
    }

    //check email
    if (!checkEmail) {
        $("#noti-email").addClass("show");
    }
    else {
        $("#noti-email").removeClass("show");
    }

    //check name
    if (checkNull($("#name").val()) ) {
        $("#noti-null").addClass("show");
    }
    else {
        $("#noti-null").removeClass("show");
    }

    //check price
    if(selectPrice == 0){
        $("#noti-price").addClass("show");
    }
    else{
        $("#noti-price").removeClass("show");
    }    

    //open modal
    if (checkPhoneNumber && checkEmail && !checkNull($("#name").val()) && selectPrice == 1) {
        $(".modal-form").addClass("show");
    }
}
)

// close modal
$(".close-btn").click(function () {
    $(".modal-form").removeClass("show");
})

$(".modal-form-backgound").click(function () {
    $(".modal-form").removeClass("show");
})

// price
function showPrice(option){
    if(option == 1) {
        $("#price1").addClass("show");
        $("#price2").removeClass("show");}
    else if(option == 2) {
        $("#price2").addClass("show");
        $("#price1").removeClass("show");
    }
    selectPrice=1;
    $("#noti-price").removeClass("show");
}

