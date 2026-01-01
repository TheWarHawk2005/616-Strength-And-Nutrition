console.log('Why hello there. This website programmed by Louis Harrison');
scrollToHeader()

async function scrollToHeader(delay = 1000) {
    setTimeout(() => {
        // check for hash in url
        const scrollToId = window.location.hash.slice(1, window.location.hash.length)
        if (scrollToId) {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
            console.log('Scrolled to', scrollToId);
        } else {
            console.log('Provide a #section to scroll a section into view on page load')
        }
    },
        delay)
}

// copied old code from website
// TODO: Merge homepage and verify contact box works. MUST BE RAN ON 616strength.com TO PASS CORS
window.onload = function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const userName = form.querySelector('#user-name').value;
        const userEmail = form.querySelector('#user-email').value;
        const contactMessage = form.querySelector('#message').value;

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
