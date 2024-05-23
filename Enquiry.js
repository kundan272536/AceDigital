

// const scriptURL = 'https://script.google.com/macros/s/AKfycbxWjWcuCDwF9QXHMTCK58LvtdJjELFT67W4fZXVK2yWiwsVTF2tww6Yjgr7Jn4XlYWh/exec'

// const form = document.forms['Enquiry-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })



// (function() {
//     emailjs.init("chandra.shekhar@acedigitalsolution.com"); // Replace with your EmailJS User ID
// })();

// function submitForm(event) {
//     event.preventDefault();

//     var name = document.getElementById("name").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;

//     var templateParams = {
//         name: name,
//         phone: phone,
//         email: email
//     };

//     emailjs.send('service_pm50tbi', 'template_Enquiry_form', templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Form Submitted Successfully');
//             document.getElementById("Enquiry-form").reset();
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Error submitting form');
//         });
// }