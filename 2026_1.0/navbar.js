const navLinks = document.getElementById('nav-links-container')
window.addEventListener('resize', checkNavbar);

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