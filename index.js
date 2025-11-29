elements = document.querySelectorAll('.package-price')
console.log('Website programmed by Louis Harrison.')
console.log('Thanks to email.js (emailjs.com), namecheap (namecheap.com) and GitHub (github.com).')

for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = pricing[i].toString()
}

function redirectToSignup() {
    //alert('616 Strength and Nutrition uses Turnkey to handle transactions and scheduling. Mind if we redirect you?')
    window.open('https://app.turnkey.coach/coaching_tiers/74')
}

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = documen.getElementById('user-name').value
        const userEmail = document.getElementById('user-email').value
        const message = document.getElementById('message').value
        
        (async () => {
            try {
                const response = await fetch("https://tests--msmoneypenny.netlify.app/.netlify/functions/moneypenny", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        task: "check_form",
                        body: { name: userName, email: userEmail, message: message }
                    })
                });

                const data = await response.json();
                console.log("Function response:", data);
            } catch (err) {
                console.error("Fetch failed:", err);
            }
        })();
    });

}
