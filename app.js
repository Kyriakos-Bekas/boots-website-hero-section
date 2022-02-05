// Create and initialise GSAP timeline
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });

// Hero Section Animation
tl.fromTo(
	`.hero-img`,
	{ scale: 1.3, borderRadius: 0 },
	{
		scale: 1,
		borderRadius: `0.6rem`,
		delay: 0.3,
		duration: 2.5,
		ease: "elastic.out(1.5, 1)",
	}
)
	.fromTo(`.cta-1`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-3`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-2`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-4`, { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-6`, { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-5`, { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
	.fromTo(`.cta-btn`, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<50%");

// Split Text
const logo = document.querySelector(`.logo`);
const letters = logo.textContent.split("");

// Get rid of the original text
logo.textContent = "";

// Create the text anew, with a span surrounding each character
letters.forEach((letter) => {
	logo.innerHTML += `<span class="letter">${letter}</span>`;
});

/*
    Set the display of all elements with a class of "letter" to 'inline-block'
    That will allow us to animate the x and y values of the span elements,
    which are originally 'inline' elements, that do not have a height property
*/
gsap.set(`.letter`, { display: `inline-block` });

gsap.fromTo(
	`.letter`,
	{ y: `100%`, opacity: 0 },
	{ y: 0, opacity: 1, delay: 1.25, stagger: 0.025, ease: "back.out(3)" }
);
