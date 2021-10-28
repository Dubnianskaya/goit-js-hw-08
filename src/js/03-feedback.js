import throttle from 'lodash.throttle';
const form = document.querySelector("form");
const FEEDBACK_FORM_KEY = "feedback-form-state"
form.addEventListener("input", throttle(onSavingFormData, 500));
form.addEventListener("submit", onFormSubmit)
filledForm()
function onSavingFormData(event) {
    let feedbackFormData = localStorage.getItem(FEEDBACK_FORM_KEY);
    feedbackFormData = feedbackFormData ? JSON.parse(feedbackFormData) : {};
    feedbackFormData[event.target.name] = event.target.value
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackFormData))
}
function onFormSubmit(event) {
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)))
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function filledForm() {
    let savedData = localStorage.getItem(FEEDBACK_FORM_KEY);
    if(savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
    }
    
}

