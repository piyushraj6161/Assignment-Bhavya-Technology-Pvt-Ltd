// Array of available subjects
const subjects = ["Physics", "Chemistry", "Maths", "Biology","English","Hindi", "Computer Science", "History", "Geography", "Art"];
var selectedOptions = [];

// Function to populate subject dropdowns
function populateDropdowns() {
    const dropdownsContainer = document.getElementById("subjectDropdowns");
    dropdownsContainer.innerHTML = ""; // Clear previous dropdowns
    for (let i = 1; i <= 5; i++) {
        const dropdown = document.createElement("select");
        dropdown.name = "subject" + i;
        dropdown.required = true;
        dropdown.innerHTML = "<option value=''>Select</option>";
        subjects.forEach(subject => {
            dropdown.innerHTML += `<option value="${subject}" >${subject}</option>`;
        });
        // Add paragraph to display the selected subject
        const selectedSubjectPara = document.createElement("p");
        selectedSubjectPara.id = "selectedSubject" + i;
        selectedSubjectPara.textContent = "Subject " + i;
        dropdownsContainer.appendChild(selectedSubjectPara);
        dropdownsContainer.appendChild(dropdown);

        // Add event listener to the dropdown to update subsequent dropdowns
        dropdown.addEventListener("change", function() {
            // Get the index of the current dropdown
            const currentIndex = parseInt(this.name.slice(-1));
            // Update selectedOptions array
            selectedOptions[currentIndex - 1] = this.value;
            // Update subsequent dropdowns
            for (let j = currentIndex + 1; j <= 5; j++) {
                const nextDropdown = document.getElementsByName("subject" + j)[0];
                // Clear options
                nextDropdown.innerHTML = "<option value=''>Select</option>";
                subjects.forEach(subject => {
                    // Add only if the subject is not already selected
                    if (!selectedOptions.includes(subject)) {
                        nextDropdown.innerHTML += `<option value="${subject}" >${subject}</option>`;
                    }
                });
            }
        });
    }
}

populateDropdowns();
