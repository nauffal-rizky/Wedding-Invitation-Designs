document.addEventListener("DOMContentLoaded", () => {
	// NAV
	const navbar = document.querySelector(".navbar");

	const headNav = document.querySelector(".head-nav");
	const headNavHeight = headNav.getBoundingClientRect().height;

	const toggleContainer = document.querySelector(".toggle-links");
	const toggleContainerHeight = toggleContainer.getBoundingClientRect().height;

	const navToggle = document.querySelector(".nav-toggle");
	navToggle.addEventListener("click", () => {
		if (!navbar.classList.contains("show")) {
			navbar.classList.add("show");
			navbar.style.height = `calc(${headNavHeight}px + ${toggleContainerHeight}px + 3.4rem)`;
		} else {
			navbar.classList.remove("show");
			navbar.style.height = `calc(${headNavHeight}px + 2.4rem)`;
		}
	});

	// STORY
	const timeline = document.querySelector(".timeline");
	const timelineCard = document.querySelector(".timeline-card");

	// RSVP
	// attendance
	const attendance = document.querySelector(".attendance");
	const attendanceSelectedOption = attendance.querySelector(".selected-option");
	const attendanceOptionsContainer = attendance.querySelector(".options");
	const attendanceDropBtn = attendance.querySelector(".drop-btn");
	window.addEventListener("click", (e) => {
		if (
			(e.target === attendance &&
				!attendanceOptionsContainer.classList.contains("drop")) ||
			(e.target === attendanceDropBtn &&
				!attendanceOptionsContainer.classList.contains("drop")) ||
			(e.target === attendanceSelectedOption &&
				!attendanceOptionsContainer.classList.contains("drop"))
		) {
			attendanceDropBtn.classList.add("flip");
			attendanceOptionsContainer.classList.add("drop");
		} else {
			attendanceDropBtn.classList.remove("flip");
			attendanceOptionsContainer.classList.remove("drop");
		}
	});

	const attendanceOptions =
		attendanceOptionsContainer.querySelectorAll(".option");
	attendanceOptions.forEach((option) => {
		option.addEventListener("click", () => {
			attendanceSelectedOption.innerText = option.innerText;
		});
	});

	// partner
	const partner = document.querySelector(".partner");
	const partnerSelectedOption = partner.querySelector(".selected-option");
	const partnerOptionsContainer = partner.querySelector(".options");
	const partnerDropBtn = partner.querySelector(".drop-btn");
	window.addEventListener("click", (e) => {
		if (
			(e.target === partner &&
				!partnerOptionsContainer.classList.contains("drop")) ||
			(e.target === partnerDropBtn &&
				!partnerOptionsContainer.classList.contains("drop")) ||
			(e.target === partnerSelectedOption &&
				!partnerOptionsContainer.classList.contains("drop"))
		) {
			partnerDropBtn.classList.add("flip");
			partnerOptionsContainer.classList.add("drop");
		} else {
			partnerDropBtn.classList.remove("flip");
			partnerOptionsContainer.classList.remove("drop");
		}
	});

	const partnerOptions = partnerOptionsContainer.querySelectorAll(".option");
	partnerOptions.forEach((option) => {
		option.addEventListener("click", () => {
			partnerSelectedOption.innerText = option.innerText;
		});
	});

	// event
	const event = document.querySelector(".event");
	const eventSelectedOption = event.querySelector(".selected-option");
	const amountSelectedOption = event.querySelector("#eventAmount");
	const eventOptionsContainer = event.querySelector(".options");
	const eventDropBtn = event.querySelector(".drop-btn");

	window.addEventListener("click", (e) => {
		if (
			!eventOptionsContainer.classList.contains("drop") &&
			(e.target === event ||
				e.target === eventSelectedOption ||
				e.target === amountSelectedOption ||
				e.target === eventDropBtn)
		) {
			eventDropBtn.classList.add("flip");
			eventOptionsContainer.classList.add("drop");
		} else if (!e.target.classList.contains("option")) {
			eventDropBtn.classList.remove("flip");
			eventOptionsContainer.classList.remove("drop");
		}
	});

	const eventOptions = eventOptionsContainer.querySelectorAll(".option");
	eventOptions.forEach((option) => {
		option.addEventListener("click", () => {
			const icon = option.querySelector("i");

			if (
				option.classList.contains("clicked") &&
				document.querySelectorAll(".event .clicked").length === 2
			) {
				icon.setAttribute("class", "fa-regular fa-square");
				option.classList.remove("clicked");
			} else if (
				document.querySelectorAll(".event .clicked").length === 1 &&
				!option.classList.contains("clicked")
			) {
				icon.setAttribute("class", "fa-solid fa-square-check");
				option.classList.add("clicked");
			} else if (
				document.querySelectorAll(".event .clicked").length === 1 &&
				option.classList.contains("clicked")
			) {
				return false;
			}

			if (
				document.querySelectorAll(".event .clicked").length ===
				eventOptions.length
			) {
				amountSelectedOption.textContent = "semua";
			} else {
				amountSelectedOption.textContent = "satu";
			}
		});
	});

	// RESIZE
	window,
		addEventListener("resize", () => {
			navbar.classList.remove("show");
			if (screen.width <= 576) {
				navbar.style.height = `calc(${headNavHeight}px + 2.4rem)`;
			} else {
				navbar.style.height = `auto`;
			}

			if (screen.width <= 425) {
				timeline.style.display = "none";
				timelineCard.style.display = "flex";
			} else if (screen.width > 425) {
				timeline.style.display = "block";
				timelineCard.style.display = "none";
			}
		});
	if (screen.width <= 576) {
		navbar.style.height = `calc(${headNavHeight}px + 2.4rem)`;
	}
});
