function volume_sphere() {
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Check if the input is a valid number
    if (isNaN(radius) || radius < 0) {
        // Set the volume input field to "NaN" if the input is not valid
        const volumeInput = document.getElementById('volume');
        volumeInput.value = 'NaN';
    } else {
        // Calculate the volume of the sphere if the input is valid
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the volume in the "volume" input field
        const volumeInput = document.getElementById('volume');
        volumeInput.value = volume.toFixed(4); // Display the volume rounded to 4 decimal places
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
