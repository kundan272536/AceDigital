// get enquiry
var openPopupBtn = document.getElementById('openPopup');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    openPopupBtn.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });

    // JavaScript code to handle form submission
    document.getElementById('Enquiry-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Fetch values from form fields
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;

        // Display the values (you can replace this with your desired action)
        console.log('Name:', name);
        console.log('Phone No:', phone);
        console.log('Email:', email);

        // Clear form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';

        // Close the popup
        popup.classList.remove('active');
        overlay.classList.remove('active');
    });

    // get quotes
    // document.addEventListener('DOMContentLoaded', function() {
    //     var openPopupBtns = document.querySelectorAll('.openPopup');
    //     var popups = document.querySelectorAll('.popup');
    //     var overlay = document.getElementById('overlay');
    
    //     openPopupBtns.forEach(function(btn) {
    //         btn.addEventListener('click', function(event) {
    //             event.preventDefault();
    //             var popupId = this.getAttribute('data-popup');
    //             var popup = document.getElementById(popupId);
    //             popup.classList.add('active');
    //             overlay.classList.add('active');
    //         });
    //     });
    
    //     overlay.addEventListener('click', function() {
    //         popups.forEach(function(popup) {
    //             popup.classList.remove('active');
    //         });
    //         overlay.classList.remove('active');
    //     });
    
    //     // JavaScript code to handle form submission
    //     var quoteForms = document.querySelectorAll('form[id^="quoteForm"]');
    //     quoteForms.forEach(function(form) {
    //         form.addEventListener('submit', function(event) {
    //             event.preventDefault(); // Prevent the form from submitting normally
    
    //             // Fetch values from form fields
    //             var name = form.querySelector('input[name="name"]').value;
    //             var email = form.querySelector('input[name="email"]').value;
    //             var phone = form.querySelector('input[name="phone"]').value;
    
    //             // Display the values (you can replace this with your desired action)
    //             console.log('Name:', name);
    //             console.log('Email:', email);
    //             console.log('Phone:', phone);
    
    //             // Clear form fields after submission
    //             form.reset();
    
    //             // Close the popup
    //             var popup = form.closest('.popup');
    //             popup.classList.remove('active');
    //             overlay.classList.remove('active');
    //         });
    //     });
    // });
    

    // fetch('proxy.php')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));

