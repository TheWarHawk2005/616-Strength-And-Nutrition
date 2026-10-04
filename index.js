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
	document.getElementById('announcement-banner').addEventListener('click', () => {
		document.getElementById('location').scrollIntoView({ behavior: "smooth" })
	})

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
		alert('Message sent! 🏋️‍♂️')
		window.location = 'https://616strength.com'
	});
}

// Google Map embed
window.initMap = function () {
	const position = {
		lat: 42.97184952313468,
		lng: -85.7700327105045
	};

	const map = new google.maps.Map(
		document.getElementById("location-map"),
		{
			center: position,
			zoom: 12,

			styles: [
				{
					featureType: "all",
					elementType: "geometry",
					stylers: [
						{ color: "#1e1e1e" }
					]
				},

				// Text color
				{
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [
						{ color: "#aaaaaa" }
					]
				},

				// Remove white text halo
				{
					featureType: "all",
					elementType: "labels.text.stroke",
					stylers: [
						{ color: "#1e1e1e" },
						{ weight: 0 }
					]
				},

				// Buildings
				{
					featureType: "landscape.man_made",
					elementType: "geometry",
					stylers: [
						{ color: "#303030" }
					]
				},

				// Roads
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{ color: "#454545" }
					]
				},

				// Water
				{
					featureType: "water",
					elementType: "geometry",
					stylers: [
						{ color: "#152a3a" }
					]
				}
			]
		}
	);

	// Drop a pin at the coordinates
	new google.maps.Marker({
		map: map,
		position: position,
		title: "616 Strength & Nutrition"
	});

	// Listen for map clicks
	map.addListener("click", (event) => {
		console.log(event.latLng.toJSON());
	});
};