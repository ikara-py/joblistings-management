const validationRules = {
    'company-name': {
        regex: /^[a-zA-Z0-9\s,.'-]{2,50}$/,
        message: "Company name must be 2-50 characters long."
    },
    'job-title': {
        regex: /^[a-zA-Z0-9\s,.'-]{2,50}$/,
        message: "Job title must be 2-50 characters long."
    },
    'description': {
        regex: /.{10,}/,
        message: "Description must be at least 10 characters long."
    }
};

// Step 1: Create the toggleError function
// TODO: Implement the toggleError function
function toggleError(field, show, message = '') {
    // Get the error display and input field elements
    // If 'show' is true, display the error message and update the input field's class
    // Otherwise, hide the error message and update the input field's class
}

// Step 2: Create the validateField function
// TODO: Implement the validateField function
function validateField(field, value) {
    
    // Get the validation rule for the field
    // If the rule exists and the value is invalid, show the error and return false
    // Otherwise, hide the error and return true
}

// Step 3: Create the validateForm function
// TODO: Implement the validateForm function
function validateForm() {
    // Initialize a variable to track form validity
    // Loop through the validation rules
    // Validate each field and update the validity variable
    // Return the final validity
}

export { validateForm, validateField, toggleError };
