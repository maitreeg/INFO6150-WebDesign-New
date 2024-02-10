
// Variable declarations

const form = document.querySelector("form");

const titles = document.querySelectorAll('input[name="title"]');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const phoneNumber = document.getElementById("phoneNumber");
const streetAddress1 = document.getElementById("streetAddress1");
const streetAddress2 = document.getElementById("streetAddress2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const source = document.querySelectorAll('input[name="source"]');
const comments = document.getElementById("comments");
const ratingSelect = document.getElementById("rating");
const dynamicCheckbox = document.getElementById("dynamicCheckbox");
const textReason = document.getElementById("textReason");
const ratingComment = document.getElementById("ratingComment");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

let table = document.getElementById("tableData");
let validatationCheckbox = false;
let validatationBool = false;
let validationErrors = {};

// End Block


                    ///submit button enable /////

// Add keyup event listeners for input fields
firstName.addEventListener("keyup", updateSubmitButton);
lastName.addEventListener("keyup", updateSubmitButton);
emailId.addEventListener("keyup", updateSubmitButton);
phoneNumber.addEventListener("keyup", updateSubmitButton);
streetAddress1.addEventListener("keyup", updateSubmitButton);
city.addEventListener("keyup", updateSubmitButton);
state.addEventListener("keyup", updateSubmitButton);
zipcode.addEventListener("keyup", updateSubmitButton);
comments.addEventListener("keyup", updateSubmitButton);
ratingComment.addEventListener("keyup", updateSubmitButton);

// Update title validation to handle key events
titles.forEach(title => {
  title.addEventListener("input", updateSubmitButton);
});

function areTitlesValid() {
    return Array.from(titles).some(title => title.checked);
}

// Add event listeners to each checkbox
source.forEach(checkbox => {
    checkbox.addEventListener("change", updateSubmitButton);
  });
  
ratingSelect.addEventListener("change", updateSubmitButton);

function updateSubmitButton() {
    const submitBtn = document.getElementById("submitBtn");
  
    // Add validation checks for all fields
    const isTitlesValid = areTitlesValid();
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailIdValid = validateEmailId(emailId.value);
    const isPhoneNumberValid = validatePhoneNo(phoneNumber.value);
    const isStreetAddress1Valid = validateStreetAddress1();
    const isCityValid = validateCity();
    const isStateValid = validateState();
    const isZipcodeValid = validateZipCode(zipcode.value);
    const isCommentsValid = comments.checkValidity();
    const isRatingCommentValid = ratingComment.checkValidity();
    const isAtLeastOneChecked = Array.from(source).some(checkbox => checkbox.checked);
    const isValidRating = ratingSelect.value !== "select";
    const validationB = validatationCheckbox;
    //const isCommentsValid = validateComments();
    //const isRatingCommentValid = validateRatingComment();
  
    // Check if all validations pass
    const isFormValid =
      isTitlesValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailIdValid &&
      isPhoneNumberValid &&
      isStreetAddress1Valid &&
      isCityValid &&
      isStateValid &&
      isZipcodeValid &&
      isAtLeastOneChecked &&
      isCommentsValid &&
      
      isValidRating &&
      validationB&&
      isRatingCommentValid;
  
    // Enable or disable the Submit button based on the overall form validity
    submitBtn.disabled = !isFormValid;
  }


// Form Submission Block

form.addEventListener("submit", e => {
  e.preventDefault();

  let title;
  for (let i=0; i<titles.length; i++) {
    if (titles[i].checked) {
      validatationBool = true;
      title = titles[i].value;
    }
  }
  if (
    validatationBool &&
    firstName.value != "" &&
    lastName.value != "" &&
    emailId.value != "" && validateEmailId(emailId.value) &&
    phoneNumber.value != "" && validatePhoneNo(phoneNumber.value) &&
    streetAddress1.value != "" &&
    city.value != "" &&
    state.value != "" &&
    zipcode.value != "" && validateZipCode(zipcode.value) &&
    ratingSelect.value != "select" &&
    ratingComment.value != ""
   ){
    submitBtn.disabled = false;
    let myString = "";

    source.forEach(item => {
      if (item.checked) {
        myString += item.value + ", ";
      }
    })

    tableData.innerHTML += `
      <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${firstName.value} ${lastName.value}</td>
        <td>${emailId.value}</td>
        <td>${phoneNumber.value}</td>
        <td>${streetAddress1.value}</td>
        <td>${streetAddress2.value}</td>
        <td>${city.value}</td>
        <td>${state.value}</td>
        <td>${zipcode.value}</td>
        <td>${myString}</td>
        <td>${comments.value}</td>
        <td>${ratingSelect.value}</td>
        <td>${ratingComment.value}</td>
      </tr>
    `;

    alert("Details have been uploaded to the table!");
    form.reset();
    validatationBool = false;
  } else {
    alert("Please enter details correctly!");
  }
  submitBtn.disabled = true;
})

// End Block

// Form Reset Block



// End Block

// Validation Block 

// Regex Validations
phoneNumber.addEventListener("keyup", () => {
  if(validatePhoneNo(phoneNumber.value)) {
    phoneNumber.style.color = "black";
  } else {
    phoneNumber.style.color = "red";
  };
})
const validatePhoneNo = no => {
    //const validateMobileRegex = /^\+?\d{0,4}[-\s()]*\d{1,4}[-\s()]*\d{1,6}$/;
    const validateMobileRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (no.match(validateMobileRegex)) {
      return true;
    } else {
      return false;
    }
}

zipcode.addEventListener("keyup", () => {
  if(validateZipCode(zipcode.value)) {
    zipcode.style.color = "black";
  } else {
    zipcode.style.color = "red";
  };
})
const validateZipCode = zipcode => {
  const validateZip = /^\d{5}(-\d{4})?$/;

  if (zipcode.match(validateZip)) {
    return true;
  } else {
    return false;
  }
}

emailId.addEventListener("keyup", () => {
  const domain = "northeastern.edu";
  if(validateEmailId(emailId.value) && emailId.value.indexOf(domain) != -1) {
    emailId.style.color = "black";
  } else if (emailId.value.indexOf(domain) === -1) {
    emailId.style.color = "red";
  };
})
const validateEmailId = email => {
  const validateEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(validateEmailRegex)) {
    return true;
  } else {
    return false;
  }
}

// Full Form Validations
firstName.addEventListener("keyup", () => {
    if(validateFirstName(firstName.value)) {
        firstName.style.color = "black";
      } else {
        firstName.style.color = "red";
      }
})
const validateFirstName = no => {
    const value = firstName.value;
    // Validate Not null
    const isNotNull = value.trim() !== "";
    // Validate Min length
    const minLength = 3; // Minimum length required
    const isMinLengthValid = value.length >= minLength;
    // Validate Max length
    const maxLength = 100; // Maximum allowed length
    const isMaxLengthValid = value.length <= maxLength;
    // Validate alphanumeric without special characters
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces
    const isAlphanumericValid = alphanumericRegex.test(value);
    
    if (isNotNull && isMinLengthValid && isMaxLengthValid && isAlphanumericValid) {
      return true;
    } else {
      return false;
    }
}

lastName.addEventListener("keyup", () => {
    if(validateLastName(lastName.value)) {
        lastName.style.color = "black";
      } else {
        lastName.style.color = "red";
      }
})
const validateLastName = no => {
    const value = lastName.value;
    // Validate Not null
    const isNotNull = value.trim() !== "";
    // Validate Min length
    const minLength = 3; // Minimum length required
    const isMinLengthValid = value.length >= minLength;
    // Validate Max length
    const maxLength = 100; // Maximum allowed length
    const isMaxLengthValid = value.length <= maxLength;
    // Validate alphanumeric without special characters
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces
    const isAlphanumericValid = alphanumericRegex.test(value);
    
    if (isNotNull && isMinLengthValid && isMaxLengthValid && isAlphanumericValid) {
      return true;
    } else {
      return false;
    }
}

streetAddress1.addEventListener("keyup", () => {
    if(validateStreetAddress1(streetAddress1.value)) {
        streetAddress1.style.color = "black";
      } else {
        streetAddress1.style.color = "red";
      }
})
const validateStreetAddress1 = val => {
    const value = streetAddress1.value;
    const isNotNull = value.trim() !== "";
    const minLength = 3; // Minimum length required
    const isMinLengthValid = value.length >= minLength;
    // Validate Max length
    const maxLength = 100; // Maximum allowed length
    const isMaxLengthValid = value.length <= maxLength;
    if (isNotNull && isMinLengthValid && isMaxLengthValid) {
        return true;
      } else {
        return false;
      }
}

city.addEventListener("keyup", () => {
    if(validateCity(city.value)) {
        city.style.color = "black";
      } else {
        city.style.color = "red";
      }
})
const validateCity = val => {
    const value = city.value;
    const isNotNull = value.trim() !== "";
    const minLength = 3; // Minimum length required
    const isMinLengthValid = value.length >= minLength;
    // Validate Max length
    const maxLength = 100; // Maximum allowed length
    const isMaxLengthValid = value.length <= maxLength;
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces
    const isAlphanumericValid = alphanumericRegex.test(value);
    if (isNotNull && isMinLengthValid && isMaxLengthValid && isAlphanumericValid) {
        return true;
      } else {
        return false;
      }
}

state.addEventListener("keyup", () => {
    if(validateState(state.value)) {
        state.style.color = "black";
      } else {
        state.style.color = "red";
      }
})
const validateState = val => {
    const value = state.value;
    const isNotNull = value.trim() !== "";
    const minLength = 1; // Minimum length required
    const isMinLengthValid = value.length >= minLength;
    // Validate Max length
    const maxLength = 100; // Maximum allowed length
    const isMaxLengthValid = value.length <= maxLength;
    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces
    const isAlphanumericValid = alphanumericRegex.test(value);
    if (isNotNull && isMinLengthValid && isMaxLengthValid && isAlphanumericValid) {
        return true;
      } else {
        return false;
      }
}

// End Block

// Dynamic Select Block Selection 

ratingSelect.onchange = (e) => {
  
  if (e.target.value == "5") {

    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 5 rating, what did you like the most?</p>
      <input id="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value.length == 0) { 
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
          console.log(validatationBool);
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "4") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 4 rating, please share more details to make the product more viable!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "3") {
    
    dynamicCheckbox.style.display = "block";

    dynamicCheckbox.innerHTML = `
      <p>Thanks for the 3 rating, what did you like or dislike the most?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "2") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>Please provide us more feedback to serve you better!</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else if (e.target.value == "1") {
    
    dynamicCheckbox.style.display = "block";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = `
      <p>We're sorry about it, what went wrong?</p>
      <input id="messageCheckbox1" class="messageCheckbox1" type='checkbox' name="source" value="service" /> Service
      <input id="messageCheckbox2" class="messageCheckbox2" type='checkbox' name="source" value="food" /> Food
      <input id="messageCheckbox3" class="messageCheckbox3" type='checkbox' name="source" value="travel" /> Travel 
      <br><br>
    `;

    const messageCheckbox1 = document.getElementById("messageCheckbox1");
    const messageCheckbox2 = document.getElementById("messageCheckbox2");
    const messageCheckbox3 = document.getElementById("messageCheckbox3");
    

    messageCheckbox1.addEventListener("click", () => {
    
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
        if (ratingComment.value == "") {
          validatationBool = false;
        }
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox2.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

    messageCheckbox3.addEventListener("click", () => {
      if (messageCheckbox1.checked || messageCheckbox2.checked || messageCheckbox3.checked) {
        validatationCheckbox = true;
        textReason.style.display = "block";
      } else {
        textReason.style.display = "none";
      }
    })

  } else {
    dynamicCheckbox.style.display = "none";
    textReason.style.display = "none";

    dynamicCheckbox.innerHTML = "";
  }

}

// End Block
