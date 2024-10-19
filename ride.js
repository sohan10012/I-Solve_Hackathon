const ridesData = [
  {
    origin: "City A",
    destination: "City B",
    date: "2024-10-20",
    time: "10:00",
    seats: 3,
    price: "100",
  },
  {
    origin: "City C",
    destination: "City D",
    date: "2024-10-21",
    time: "11:00",
    seats: 2,
    price: "150",
  },
  // Add more default rides as needed
];

const bookedRides = [];

// Function to display rides
function displayRides() {
  const ridesList = document.getElementById("rides-list");
  if (!ridesList) return;

  ridesList.innerHTML = "";
  ridesData.forEach((ride, index) => {
    ridesList.innerHTML += `
      <div class="ride">
        <h3>From: ${ride.origin} To: ${ride.destination}</h3>
        <p>Date: ${ride.date}, Time: ${ride.time}, Seats Available: ${ride.seats}, Price: ${ride.price}</p>
        <button onclick="bookRide(${index})">Book Now</button>
      </div>
    `;
  });

  updateRideCounts();
}

// Function to display booked rides
function displayBookedRides() {
  const bookedList = document.getElementById("booked-list");
  if (!bookedList) return;

  bookedList.innerHTML = "";
  if (bookedRides.length === 0) {
    bookedList.textContent = "None";
  } else {
    bookedRides.forEach((ride) => {
      bookedList.innerHTML += `
        <div class="ride">
          <h3>From: ${ride.origin} To: ${ride.destination}</h3>
          <p>Date: ${ride.date}, Time: ${ride.time}, Seats Booked: ${ride.seats}, Price: ${ride.price}</p>
        </div>
      `;
    });
  }

  updateRideCounts();
}

// Function to handle ride booking
function bookRide(index) {
  const ride = ridesData[index];
  if (ride.seats > 0) {
    ride.seats--;
    bookedRides.push({ ...ride, seats: 1 });
    console.log(`Booked ride: ${JSON.stringify(ride)}`);
    alert(`Booked ride from ${ride.origin} to ${ride.destination}`);
    displayRides();
    displayBookedRides();
  } else {
    alert("No seats available for this ride.");
  }
}

// Function to update ride counts
function updateRideCounts() {
  document.getElementById("available-rides-count").textContent =
    ridesData.length;
  document.getElementById("booked-rides-count").textContent =
    bookedRides.length;
}

// Add event listener for the offer ride form
document
  .getElementById("offer-ride-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const origin = event.target[0].value;
    const destination = event.target[1].value;
    const date = event.target[2].value;
    const time = event.target[3].value;
    const seats = event.target[4].value;
    const price = event.target[5].value;

    ridesData.push({ origin, destination, date, time, seats, price });
    alert("Ride offered successfully!");
    event.target.reset();
    displayRides();
  });

// Call displayRides when the page loads
displayRides();
displayBookedRides();


