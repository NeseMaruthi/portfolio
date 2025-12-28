var dark = document.getElementById("dark");
var theme_count = 1;
function change() {
    theme_count = theme_count + 1;
    if (theme_count % 2 == 0) {
        document.getElementById("dark").src = "../images/icons8-day-and-night-50.png";
        document.body.classList.toggle("dark-theme");
    }
    else {
        document.getElementById("dark").src = "../images/icons8-day-and-night-50.png";
        document.body.classList.toggle("dark-theme");
    }
}

//document.body.classList.toggle("dark-theme");
function clearForm(event) {
    event.preventDefault(); // Prevent immediate form submission

    const form = event.target;

    // Submit the form data
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                // Clear the form
                form.querySelector('input[name="name"]').value = '';
                form.querySelector('input[name="email"]').value = '';
                form.querySelector('textarea[name="message"]').value = 'Enter your message here...';

                // Show success message
                alert('Message sent successfully!');
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            alert('There was an error sending your message. Please try again.');
        });
}