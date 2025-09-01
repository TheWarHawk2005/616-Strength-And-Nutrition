console.log('Why hello there. This website programmed by Louis Harrison');

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "Z0XokRkh5OmLpT_4K",
    });
})();
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('web_contact_service', 'web_contact_template', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Message sent! 🏋️‍♂️')
                location.reload()
            }, (error) => {
                console.log('FAILED...', error);
                alert("Sorry, something went wrong with our email program 🙄. Maybe try again?")
            });
    });
}