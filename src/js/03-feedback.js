import throttle from 'lodash.throttle';
const form = document.querySelector("form");
const FEEDBACK_FORM_KEY = "feedback-form-state"
form.addEventListener("input", throttle(onSavingFormData, 500));
form.addEventListener("submit", onFormSubmit)
filledForm()
const feedbackFormData = {}
function onSavingFormData(event) {
    feedbackFormData[event.target.name] = event.target.value
    localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(feedbackFormData))
}
function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_KEY)
    console.log(feedbackFormData)
}

function filledForm() {
    const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
    if(savedData) {
    
    }
}