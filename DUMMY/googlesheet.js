const scriptURL = 'https://script.google.com/macros/s/AKfycbxhe-78s92CaMXWxEUcZZoPTQlS8qzG9WtdaCFPsLtZ50luTdE23vMrtXbk1kH46bgc/exec'

const form = document.forms['Enquiryform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})