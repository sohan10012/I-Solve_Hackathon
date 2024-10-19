document.addEventListener("DOMContentLoaded", (event) => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuBtn && hamburger && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenuBtn.contains(e.target) &&
        !mobileMenu.contains(e.target) &&
        mobileMenu.classList.contains("active")
      ) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });

    // Close mobile menu when window is resized above mobile breakpoint
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const signinButton = document.getElementById("signinButton");
  const signinCard = document.getElementById("signinCard");
  const overlay = document.querySelector(".overlay");

  signinButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the event from propagating to the document
    console.log("Sign-in button clicked");
    if (signinCard.style.display === "block") {
      signinCard.style.display = "none";
      overlay.style.display = "none";
      console.log("Sign-in card and overlay hidden");
    } else {
      signinCard.style.display = "block";
      overlay.style.display = "block";
      console.log("Sign-in card and overlay displayed");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      signinCard.style.display === "block" &&
      !signinCard.contains(event.target) &&
      event.target !== signinButton
    ) {
      signinCard.style.display = "none";
      overlay.style.display = "none";
      console.log("Clicked outside the sign-in card, hiding card and overlay");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("findRideBtn").addEventListener("click", function () {
    document.getElementById("iframeCard").style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const findRideButton = document.getElementById("findRideBtn");
  const findRideCard = document.getElementById("findRideCard");
  const overlay = document.querySelector(".overlay");

  findRideButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleCard(findRideCard, "ride.html");
  });

  document.addEventListener("click", function (event) {
    if (
      findRideCard.style.display === "block" &&
      !findRideCard.contains(event.target) &&
      event.target !== findRideButton
    ) {
      findRideCard.style.display = "none";
      overlay.style.display = "none";
    }
  });

  function toggleCard(card, src) {
    const iframe = card.querySelector("iframe");
    if (card.style.display === "block") {
      card.style.display = "none";
      overlay.style.display = "none";
    } else {
      iframe.src = src;
      card.style.display = "block";
      overlay.style.display = "block";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const resultsDiv = document.getElementById("results");

  const rides = [
    {
      leavingFrom: "Bengaluru",
      goingTo: "Mumbai",
      date: "2024-10-20",
      time: "08:00 AM",
    },
    {
      leavingFrom: "B",
      goingTo: "C", 
      date:"2024-11-11",
      time: "11:11 AM",
    },
    {
      leavingFrom: "Bengaluru",
      goingTo: "Chennai",
      date: "2024-10-20",
      time: "09:00 AM",
    },
    {
      leavingFrom: "Bengaluru",
      goingTo: "Hyderabad",
      date: "2024-10-21",
      time: "10:00 AM",
    },
    {
      leavingFrom: "Mumbai",
      goingTo: "Bengaluru",
      date: "2024-10-20",
      time: "11:00 AM",
    },
    // Add more dummy data as needed
  ];

  searchBtn.addEventListener("click", function () {
    const leavingFrom = document.getElementById("leavingFrom").value;
    const goingTo = document.getElementById("goingTo").value;
    const rideDate = document.getElementById("rideDate").value;

    const filteredRides = rides.filter(
      (ride) =>
        ride.leavingFrom.toLowerCase() === leavingFrom.toLowerCase() &&
        ride.goingTo.toLowerCase() === goingTo.toLowerCase() &&
        ride.date === rideDate
    );

    displayResults(filteredRides);
  });

  function displayResults(rides) {
    resultsDiv.innerHTML = "";
    if (rides.length === 0) {
      resultsDiv.innerHTML = "<p>No rides found.</p>";
    } else {
      rides.forEach((ride) => {
        const rideElement = document.createElement("div");
        rideElement.className = "ride";
        rideElement.innerHTML = `
          <p><strong>Leaving from:</strong> ${ride.leavingFrom}</p>
          <p><strong>Going to:</strong> ${ride.goingTo}</p>
          <p><strong>Date:</strong> ${ride.date}</p>
          <p><strong>Time:</strong> ${ride.time}</p>
        `;
        resultsDiv.appendChild(rideElement);
      });
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const leaderboardButton = document.getElementById("leaderboardButton");
  const leaderboardCard = document.getElementById("leaderboardCard");
  const leaderboardOverlay = document.getElementById("leaderboardOverlay");

  if (leaderboardButton && leaderboardCard && leaderboardOverlay) {
    leaderboardButton.addEventListener("click", function () {
      leaderboardCard.style.display = "block";
      leaderboardOverlay.style.display = "block";
    });

    leaderboardOverlay.addEventListener("click", function () {
      leaderboardCard.style.display = "none";
      leaderboardOverlay.style.display = "none";
    });
  } else {
    console.error("One or more elements not found");
  }
});





document.addEventListener("DOMContentLoaded", function () {
  const newCardButton = document.getElementById("newCardButton");
  const newCard = document.getElementById("newCard");
  const newCardOverlay = document.getElementById("newCardOverlay");

  if (newCardButton && newCard && newCardOverlay) {
    newCardButton.addEventListener("click", function () {
      newCard.style.display = "block";
      newCardOverlay.style.display = "block";
    });

    newCardOverlay.addEventListener("click", function () {
      newCard.style.display = "none";
      newCardOverlay.style.display = "none";
    });
  } else {
    console.error("One or more elements not found");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const howItWorksButton = document.getElementById("howItWorksButton");
  const howItWorksCard = document.getElementById("howItWorksCard");
  const howItWorksOverlay = document.getElementById("howItWorksOverlay");

  if (howItWorksButton && howItWorksCard && howItWorksOverlay) {
    howItWorksButton.addEventListener("click", () => {
      howItWorksCard.style.display = "block";
      howItWorksOverlay.style.display = "block";
    });

    howItWorksOverlay.addEventListener("click", () => {
      howItWorksCard.style.display = "none";
      howItWorksOverlay.style.display = "none";
    });
  } else {
    console.error("One or more elements not found");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const settingsButton = document.getElementById("settingsButton");
  const settingsCard = document.getElementById("settingsCard");
  const settingsOverlay = document.getElementById("settingsOverlay");

  if (settingsButton && settingsCard && settingsOverlay) {
    settingsButton.addEventListener("click", () => {
      settingsCard.style.display = "block";
      settingsOverlay.style.display = "block";
    });

    settingsOverlay.addEventListener("click", () => {
      settingsCard.style.display = "none";
      settingsOverlay.style.display = "none";
    });
  } else {
    console.error("One or more elements not found");
  }
});
