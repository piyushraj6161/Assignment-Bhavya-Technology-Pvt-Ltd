
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(this);
    fetch('submit.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() !== "New record created successfully") {
            Toastify({
                text: "Successfully created",
                duration: 3000, // 3 seconds
                close: true,
                gravity: "top", // Show the toast at the top
                position: "right", // Show the toast on the right side
                backgroundColor: "green" // Green color for success
            }).showToast();
        } else {
            Toastify({
                text: "Error: " + data,
                duration: 3000, // 3 seconds
                close: true,
                gravity: "top", // Show the toast at the top
                position: "right", // Show the toast on the right side
                backgroundColor: "red" // Red color for error
            }).showToast();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Toastify({
            text: "An error occurred while processing the request.",
            duration: 3000, // 3 seconds
            close: true,
            gravity: "top", // Show the toast at the top
            position: "right", // Show the toast on the right side
            backgroundColor: "red" // Red color for error
        }).showToast();
    });
});

