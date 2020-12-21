let tl = gsap.timeline();

tl.from(".splash", { height: 0, duration: 1, ease: "in" })
	.from(".background", { scaleX: 0, duration: 1, ease: "out" })
	.fromTo(".splash", { width: "100%" }, { width: "80%" }, "-=1")
	.from(".headline", { height: 0, duration: 0.5 })
	.from(".title", { yPercent: -200 }, "-=0.5");
