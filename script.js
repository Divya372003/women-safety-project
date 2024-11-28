const alertButton = document.getElementById('alertButton');
const statusMessage = document.getElementById('status');

alertButton.addEventListener('click', () => {
  statusMessage.textContent = 'Sending emergency alert...';
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sendEmergencyAlert(latitude, longitude);
      },
      () => {
        statusMessage.textContent = 'Unable to retrieve location. Please try again.';
      }
    );
  } else {
    statusMessage.textContent = 'Geolocation is not supported by your browser.';
  }
});

function sendEmergencyAlert(lat, long) {
  // For demonstration, we're just logging the location.
  // In a real app, you would send this data to an API or a contact.
  console.log(`Emergency Alert Sent! Latitude: ${lat}, Longitude: ${long}`);
  
  statusMessage.textContent = `Alert sent! Location: ${lat.toFixed(4)}, ${long.toFixed(4)}`;
}
