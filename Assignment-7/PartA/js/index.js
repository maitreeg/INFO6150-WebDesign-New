$(document).ready(function(){
    // Initially disable login button
    $('#login-btn').prop('disabled', true);

    // Function to validate email format
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@northeastern\.edu$/;
        return emailPattern.test(email);
    }

    // Function to validate special characters
    function hasSpecialCharacters(value) {
        var specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        return specialCharPattern.test(value);
    }

    // Function to validate length
    function isValidLength(value, minLength, maxLength) {
        return value.length >= minLength && value.length <= maxLength;
    }

    // Function to show error message
    function showError(field, message) {
        field.addClass('error');
        field.next('.error-message').text(message).show();
    }

    // Function to hide error message
    function hideError(field) {
        field.removeClass('error');
        field.next('.error-message').hide();
    }
    // $('#userName').keyup(function(){
    //     var field = $(this);
    //     var fieldName = field.attr('name');
    //     var value = field.val();
    //     var uname = $(this).val();
    //     var error = false;
    //     if( hasSpecialCharacters(uname)){
    //         showError(field, fieldName +' cannot contain special characters');
    //     }
    //     else if(value.trim() === ''){
    //         showError(field, fieldName + ' cannot be empty');
    //         error = true;
    //     } 
    //     else if(!isValidLength(value, 6, 20)){
    //         showError(field, fieldName + ' must be between 6 and 20 characters');
    //         error = true;
    //     } 
    //     else {
    //         hideError(field);
    //     }
    //     if(!error && $('#email').hasClass('error') === false){
    //         $('#login-btn').prop('disabled', false);
    //     } else {
    //         $('#login-btn').prop('disabled', true);
    //     }

    // });
    // $('#confirmPassword').keyup(function(){
    //     var field = $(this);
    //     var fieldName = field.attr('name');
    //     var value = field.val();
    //     var uname = $(this).val();
    //     var error = false;
    //     if( hasSpecialCharacters(uname)){
    //         showError(field, fieldName +' cannot contain special characters');
    //     }
    //     else if(value.trim() === ''){
    //         showError(field, fieldName + ' cannot be empty');
    //         error = true;
    //     } 
    //     else if(!isValidLength(value, 6, 20)){
    //         showError(field, fieldName + ' must be between 6 and 20 characters');
    //         error = true;
    //     } 
    //     else if(fieldName === 'Confirm Password'){
    //         var password = $('#password').val();
    //         if(value !== password){
    //             showError(field, 'Passwords do not match');
    //             error = true;
    //         } else {
    //             hideError(field);
    //         }
    //     }
    //     else {
    //         hideError(field);
    //     }
    //     if(!error && $('#email').hasClass('error') === false){
    //         $('#login-btn').prop('disabled', false);
    //     } else {
    //         $('#login-btn').prop('disabled', true);
    //     }

    // });
    // $('#password').keyup(function(){
    //     var field = $(this);
    //     var fieldName = field.attr('name');
    //     var value = field.val();
    //     var uname = $(this).val();
    //     var error = false;
    //     if( hasSpecialCharacters(uname)){
    //         showError(field, fieldName +' cannot contain special characters');
    //     }
    //     else if(value.trim() === ''){
    //         showError(field, fieldName + ' cannot be empty');
    //         error = true;
    //     } 
    //     else if(!isValidLength(value, 6, 20)){
    //         showError(field, fieldName + ' must be between 6 and 20 characters');
    //         error = true;
    //     } 
    //     else {
    //         hideError(field);
    //     }
    //     if(!error && $('#email').hasClass('error') === false){
    //         $('#login-btn').prop('disabled', false);
    //     } else {
    //         $('#login-btn').prop('disabled', true);
    //     }

    // });

    $('#userName, #password, #confirmPassword').keyup(function() {
        var field = $(this);
        var fieldName = field.attr('name');
        var value = field.val();

        if (hasSpecialCharacters(value)) {
            showError(field, fieldName + ' cannot contain special characters');
        } else if (value.trim() === '') {
            showError(field, fieldName + ' cannot be empty');
        } else if (!isValidLength(value, 6, 20)) {
            showError(field, fieldName + ' must be between 6 and 20 characters');
        } else {
            hideError(field);
        }

        toggleLoginButton();
    });

    $('#confirmPassword').keyup(function() {
        var confirmPassword = $(this).val();
        var password = $('#password').val();

        if (confirmPassword !== password) {
            showError($(this), 'Passwords do not match');
        } else {
            hideError($(this));
        }

        toggleLoginButton();
    });

    // Validate email format
    $('#email').keyup(function(){
        var email = $(this).val();
        var field = $(this);
        var fieldName = field.attr('name');
        var value = field.val();
        var error = false;
        if(value === '' || value == null || email == null){
            showError(field, fieldName + ' cannot be empty');
            error = true;
        }
        else if(!isValidEmail(email)){
            showError($(this), 'Please enter a valid Northeastern email');
        } 
        // else if(value.trim() === ''){
        //     showError(field, fieldName + ' cannot be empty');
        //     error = true;
        // } 
        else {
            hideError(field);
            //$('#login-btn').prop('disabled', false);
        }
        toggleLoginButton();
    });

    function toggleLoginButton() {
        var errorFields = $('.error-message:visible');
        var hasErrors = errorFields.length > 0;
        var emailField = $('#email');
        var emailError = emailField.hasClass('error');

        var emailValue = emailField.val().trim();
        var isEmailEmpty = emailValue === '';

        if (!hasErrors && !emailError && !isEmailEmpty) {
            $('#login-btn').prop('disabled', false);
        } else {
            $('#login-btn').prop('disabled', true);
        }
    }


    $('#login-form').submit(function(e) {
 
        e.preventDefault();
        window.location.href = 'calculator.html?username=' + encodeURIComponent($('#userName').val());
    });

});
