/*== Scroll Section Active Link ===*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*== Menu Icon Toggle for Navbar ===*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x'); // Optional: Toggle a different icon style
	navbar.classList.toggle('active'); // This adds/removes the 'active' class to show/hide the navbar
};


/*== Scroll Event for Sticky Header and Active Link ===*/ 
window.onscroll = () => {
	// Sticky header toggle
	let header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');


	// Active link switching on scroll
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active');
				document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
			});
		}
	});
};
// Scroll reveal initialization
ScrollReveal({
	// reset: true,
	distance: '80px',
	duration: 2000, // Add the missing comma here
	delay: 200
});

// Scroll reveal for specific elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
window.onload = function() {
    const typed = new Typed('.multiple-text',{
        strings: ['Web Developer', 'Network Engineer','Graphics Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
};
