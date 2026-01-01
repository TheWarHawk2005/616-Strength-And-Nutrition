const navLinks = document.getElementById('nav-links-container')
window.addEventListener('resize', checkNavbar);
document.getElementById('mobile-wordmark').addEventListener('click', function() {window.location = 'https://616strength.com'})

console.log('Navbar scripts connected.')

// called by mobile hamburger menu
function toggleNavLinks() {
    if (navLinks.style.display !== 'grid') {
        navLinks.style.display = 'grid'
    } else {
        navLinks.style.display = 'none'
    }
}

function checkNavbar() {
    if (screenX >= 500) {
        navLinks.style.display = 'grid'

    }
}