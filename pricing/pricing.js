// ...existing code...
class PriceCard {
    constructor() {
        this.id = undefined,
            this.name = undefined,
            this.interval = undefined,
            this.price = undefined,
            this.features = [],
            this.color = undefined
    }
    appendToDom(parent) {
        // accept either an element or an element id
        const parentElement = typeof parent === 'string' ? document.getElementById(parent) : parent
        if (!parentElement) {
            console.error('Parent element not found:', parent)
            return
        }

        const packageElement = document.createElement('div')
        packageElement.id = this.id || ''
        packageElement.className = 'package'
        packageElement.innerHTML = `

        <div class="package-header">
            <div class="package-price-container">
                <span class="dollar-sign">$</span>
                <span class="package-price">${this.price}</span>
            </div>
            <span class="package-name">${this.name}</span>
        </div>`

        if (this.interval) {
            const intervalElement = document.createElement('SPAN')
            intervalElement.classList = 'package-interval'
            intervalElement.innerHTML = `/ ${this.interval}`
            packageElement.querySelector('.package-price-container').appendChild(intervalElement)
        }

        const featuresContainer = document.createElement('div')
        featuresContainer.className = 'package-features-container'
        this.features.forEach(featureText => {
            const featureElement = document.createElement('div')
            featureElement.className = 'package-feature'
            featureElement.innerHTML = `<span>${featureText}</span>`
            featuresContainer.appendChild(featureElement)
        })
        packageElement.appendChild(featuresContainer)

        if (this.color) {
            const header = packageElement.querySelector('.package-header')
            if (header) header.style.backgroundColor = this.color
        }

        parentElement.addEventListener('click', target => {
            window.open('https://app.turnkey.coach/coaching_tiers/74', '_blank').focus();
        })
        parentElement.appendChild(packageElement)
    }
}

getPricingDetails()
scrollToHeader()


/* ----------------------- Scroll a section into view ----------------------- */
async function scrollToHeader() {
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
        500)
}

async function getPricingDetails() {
    const response = await fetch('https://616strength.com/details.json')
    const details = await response.json()
    console.log(details)
    updatePricing(details)
}

function updatePricing(details) {
    const packagesContainer = document.getElementById('packages-container')
    details.packages.forEach(packageData => {
        const card = new PriceCard()
        Object.assign(card, packageData)
        card.features = packageData.feature_indexes.map(i => details.features[i])

        card.appendToDom(packagesContainer)
    });

    const campsConsultsContainer = document.getElementById('camps-consults-container')
    details.camps_and_consults.forEach(packageData => {
        const card = new PriceCard()
        Object.assign(card, packageData)
        card.features = packageData.feature_indexes.map(i => details.features[i])

        card.appendToDom(campsConsultsContainer)
    });

}
