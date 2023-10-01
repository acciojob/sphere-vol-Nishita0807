function volume_sphere() {
    //Write your code here
       	   const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Check if the input is a valid number
    if (!(NaN) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the volume in the "volume" input field
        const volumeInput = document.getElementById('volume');
        volumeInput.value = volume.toFixed(4); // Display the volume rounded to 2 decimal places
    }
    // Prevent the form from submitting and refreshing the page
    return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
