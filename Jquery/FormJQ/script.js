$('#submitBtn').click(function (event) {
    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let gender = $("#gender").val();

    let form_alert = $("#form_alert");


    // if (name == "") {
    //     alert("Please enter your name");
    //     return
    // }

    // if(email == "") {
    //     alert("Pleas enter your email");
    //     return
    // }

    // if (gender == "select"){
    //     alert("Please select any one")
    //     return
    // }


    // alert("Form submitted successfully");


    // $("form")[0].reset();



    if(name == "") {
        $("#name").focus().attr("style", "border-color: red");

        $("#form_alert").attr("style", "font-size: 14px; color: white; background-color: #CA220D; padding: 10px; width: 40%").html("Please Enter your name");

        $(this).attr("disabled", false);
        return false;
    } else {
        $("#name").attr("style", "");
    }

    if(email == "") {
        $("#email").focus().attr("style", "border-color: red");

        $("#form_alert").attr("style", "font-size: 14px; color: white; background-color: #CA220D; padding: 10px; width: 40%").html("Please Enter your email");

        $(this).attr("disabled", false);
        return false;
    } else {
        $("#email").attr("style", "");
    }

    if(phone == "") {
        $("#phone").focus().attr("style", "border-color: red");

        $("#form_alert").attr("style", "font-size: 14px; color: white; background-color: #CA220D; padding: 10px; width: 40%").html("Please Enter your Phone No");

        $(this).attr("disabled", false);
        return false;
    } else {
        $("#phone").attr("style", "");
    }

    if(gender == "select") {
        $("#gender").focus().attr("style", "border-color: red");

        $("#form_alert").attr("style", "font-size: 14px; color: white; background-color: #CA220D; padding: 10px; width: 40%").html("Please select you gender");

        $(this).attr("disabled", false);
        return false;
    } else {
        $("#gender").attr("style", "");
    }


    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/', // API for sending form data
        type: 'POST', // If sending data it should be POST Method
        dataType: 'json', // The type of datat should JSON
    
        success: function(data) {
            console.log(data)
            $("#form_alert").attr("style", "").html('Submitted you data');
            $("form")[0].reset();
        },
    
        error: function(error) {
            console.log(error)
        }
    
    })


   




















})