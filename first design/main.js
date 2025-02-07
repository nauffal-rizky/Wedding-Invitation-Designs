document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  const then = new Date("Apr 02, 2028 10:00:00").getTime();
  const dayBox = document.querySelector(".day-box");
  const hourBox = document.querySelector(".hour-box");
  const minuteBox = document.querySelector(".minute-box");
  const secondBox = document.querySelector(".second-box");

  setInterval(() => {
    const now = new Date().getTime();

    timeInterval = then - now;

    const days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);

    dayBox.textContent = days;
    hourBox.textContent = hours;
    minuteBox.textContent = minutes;
    secondBox.textContent = seconds;
  }, 1000);

  const root = document.querySelector(":root");

  const disableScroll = () => {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollTop, scrollLeft);
    };

    root.style.scrollBehavior = "auto";
  };

  const enableScroll = () => {
    window.onscroll = function () {};
    root.style.scrollBehavior = "smooth";
  };
  const enableScrollBtn = document.querySelector(".open-btn");
  enableScrollBtn.addEventListener("click", () => {
    enableScroll();
  });

  disableScroll();

  // NAVIGATION BAR
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

  // SUBMIT RSVP
  const submitBtn = document.querySelector(".submit-btn");
  const guestName = document.querySelector(".guest-name");
  const guestAttendance = document.querySelector(
    ".attendance .selected-option"
  ).textContent;
  const guestPartner = document.querySelector(
    ".partner .selected-option"
  ).textContent;
  const guestEvent = document.querySelector(
    ".event .selected-option"
  ).textContent;
  const guestSong = document.querySelector(".guest-song").value;
  const guestContact = document.querySelector(".guest-contact input").value;

  submitBtn.addEventListener("click", () => {
    if (guestName.value != "") {
      console.log(
        `Saya ${guestName}, berniat ${guestAttendance} acara pernikahan ini bersama ${guestPartner}. Saya akan mengikuti ${guestEvent}. Saya akan lebih menikmati acaranya jika lagu ${guestSong} diputar. Berikut nomor telepon saya: ${guestContact}`
      );
    } else {
      const alert = document.createElement("div");
      alert.classList.add("alert");
      alert.innerHTML = `
        <span class="alert-text">Please insert the guest name!</span>
      `;

      document.body.append(alert);
      setTimeout(() => {
        alert.classList.add("show");
      }, 100);
      setTimeout(() => {
        alert.classList.remove("show");
      }, 4000);
      setTimeout(() => {
        document.body.removeChild(alert);
      }, 5000);
    }
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
