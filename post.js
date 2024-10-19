document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rideForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const rideData = Object.fromEntries(formData.entries());

    // Send ride data to the server
    fetch("http://localhost:3000/saveRides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rideData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then((message) => {
        console.log(message);
        alert("Ride published successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Error publishing ride: " + error.message);
      });
  });
});
