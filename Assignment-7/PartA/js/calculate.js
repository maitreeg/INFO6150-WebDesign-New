   // Display username from query parameter
$(document).ready(function(){
    function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get username from URL and display it
    var username = getUrlParameter('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }
});

function showError(field, message) {
    field.addClass('error');
    field.next('.error-message').text(message).show();
}

function hideError(field) {
    field.removeClass('error');
    field.next('.error-message').hide();
}

function isValidNumber(value) {
    return $.isNumeric(value) && isFinite(value);
}

const validateFields = () => {
    let valid = true;

    $('.validate').each(function() {
        const value = $(this).val();
        const fieldName = $(this).attr('name');
        const field = $(this);

        hideError(field);

        if (value.trim() === '') {
            showError(field, fieldName + ' cannot be empty');
            valid = false;
        } else if (!isValidNumber(value)) {
            showError(field, fieldName + ' must be a valid number');
            valid = false;
        } else if (value === 'Infinity' || value === '-Infinity') {
            showError(field, 'Value cannot be infinite');
            valid = false;
        }else if (!isFinite(parseFloat(value))) {
            showError(field, fieldName + 'Value cannot be infinite');
            valid = false;
        }
    });

    return valid;
};

const performOperation = (operation) => {
    var number1 = parseFloat($('#number1').val());
    var number2 = parseFloat($('#number2').val());
    var result = 0;

    if (!isValidNumber(number1)) {
        showError($('#number1'), 'Please enter a valid number');
        return;
    } else {
        hideError($('#number1'));
    }

    if (!isValidNumber(number2)) {
        showError($('#number2'), 'Please enter a valid number');
        return;
    } else {
        hideError($('#number2'));
    }

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                showError($('#number2'), 'Cannot divide by zero');
                return;
            } else {
                result = number1 / number2;
            }
            break;
    }

    $('#result').val(result);
}

$('#add').click(function() {
    if (validateFields()) {
        performOperation('add');
    }
});

$('#subtract').click(function() {
    if (validateFields()) {
        performOperation('subtract');
    }
});

$('#multiply').click(function() {
    if (validateFields()) {
        performOperation('multiply');
    }
});

$('#divide').click(function() {
    if (validateFields()) {
        performOperation('divide');
    }
});

