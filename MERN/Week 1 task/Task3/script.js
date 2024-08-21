let valuesArray = []; // Initialize an empty array

document.getElementById('valueForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const inputValue = document.getElementById('valueInput').value;

    // Add the input value to the array
    valuesArray.push(inputValue);

    // Print the current state of the array in the console
    console.log('Current Array:', valuesArray);

    // Clear the textbox after submission
    document.getElementById('valueInput').value = '';
});
