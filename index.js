elements = document.querySelectorAll('.package-price')
for (i=0;i<elements.length;i++) {
    elements[i].innerHTML = pricing[i].toString()
}

function redirectToSignup() {
    //alert('616 Strength and Nutrition uses Turnkey to handle transactions and scheduling. Mind if we redirect you?')
    window.open('https://app.turnkey.coach/coaching_tiers/74')
}
