elements = document.querySelectorAll('.package-price')
console.log('Website programmed by Louis Harrison.')

for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = pricing[i].toString()
}

function redirectToSignup() {
    //alert('616 Strength and Nutrition uses Turnkey to handle transactions and scheduling. Mind if we redirect you?')
    window.open('https://app.turnkey.coach/coaching_tiers/74')
}

window.onload = function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userName = form.querySelector('#user-name').value;
        const userEmail = form.querySelector('#user-email').value;
        const contactMessage = form.querySelector('textarea[name="message"]').value;

        console.log({ userName, userEmail, contactMessage });

        (async () => {
            try {
                const response = await fetch("https://tests--msmoneypenny.netlify.app/.netlify/functions/moneypenny", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        task: "check_form",
                        body: { name: userName, email: userEmail, message: contactMessage }
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
