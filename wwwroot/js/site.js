// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


let currentSlide = 0;

function showSlide(slideIndex) {
    const slidesContainer = document.querySelector('.slides');
    const slidesCount = document.querySelectorAll('.slide').length;

    if (slideIndex >= slidesCount) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slidesCount - 1;
    } else {
        currentSlide = slideIndex;
    }

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Set up navigation buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Create indicators
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.classList.add('indicators');
    document.querySelector('.slider').appendChild(indicatorsContainer);

    // Add indicators for each slide
    const slidesCount = document.querySelectorAll('.slide').length;
    for (let i = 0; i < slidesCount; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showSlide(i));
        indicatorsContainer.appendChild(indicator);
    }

    updateIndicators();
});

function editCSS(button) {
    const row = button.closest('tr');
    const teamNo = row.querySelector('td:nth-child(1)').innerText;
    const TeamName = row.querySelector('td:nth-child(2)').innerText;
    const headquarters = row.querySelector('td:nth-child(3)').innerText;
    const teamPrincipal = row.querySelector('td:nth-child(4)').innerText;
    const chassis = row.querySelector('td:nth-child(5)').innerText;
    const engine = row.querySelector('td:nth-child(6)').innerText;
    const drivers = row.querySelector('td:nth-child(7)').innerText;

    document.getElementById('team-no').value = teamNo;
    document.getElementById('team-name').value = TeamName;
    document.getElementById('headquarters').value = headquarters;
    document.getElementById('team-principal').value = teamPrincipal;
    document.getElementById('chassis').value = chassis;
    document.getElementById('engine').value = engine;
    document.getElementById('drivers').value = drivers;

    document.getElementById('edit-popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('edit-popup').classList.add('hidden');
}

document.getElementById('edit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    closePopup();
});

function deletebutton(button) {
    const popup = document.getElementById('delete-confirmation-popup');
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelDeleteButton = document.getElementById('cancel-delete');
    const row = button.parentElement.parentElement;

    popup.classList.remove('hidden');

    confirmDeleteButton.onclick = function () {
        row.remove();
        popup.classList.add('hidden');
    };

    cancelDeleteButton.onclick = function () {
        popup.classList.add('hidden');
    };
}

function deletebutton(button) {
    // Get the delete confirmation popup and buttons
    const popup = document.getElementById('delete-confirmation-popup');
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelDeleteButton = document.getElementById('cancel-delete');

    // Get the table row (tr) element of the clicked button
    const row = button.parentElement.parentElement;

    // Show the delete confirmation popup
    popup.classList.remove('hidden');

    // Handle the "Delete" button click
    confirmDeleteButton.onclick = function () {
        // Delete the row
        row.remove();

        // Hide the popup
        popup.classList.add('hidden');
    };

    // Handle the "Cancel" button click
    cancelDeleteButton.onclick = function () {
        // Hide the popup
        popup.classList.add('hidden');
    };
}

// Function to edit driver details
function editDriver(button) {
    // Find the row of the clicked button
    const row = button.closest('tr');

    // Get the values from the row
    const driverId = row.querySelector('td:nth-child(1)').innerText;
    const driverName = row.querySelector('td:nth-child(2)').innerText;
    const TeamName = row.querySelector('td:nth-child(3)').innerText;
    const countryOfOrigin = row.querySelector('td:nth-child(4)').innerText;

    // Populate the popup form with the values
    document.getElementById('field1').value = driverId; // For driver ID
    document.getElementById('field2').value = driverName; // For driver name
    document.getElementById('field3').value = TeamName; // For TeamName
    document.getElementById('field4').value = countryOfOrigin; // For country of origin

    // Display the popup form
    document.getElementById('edit-popup').classList.remove('hidden');
}

// Function to close the popup form
function closePopup() {
    document.getElementById('edit-popup').classList.add('hidden');
}

// Handle form submission
document.getElementById('edit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    const formData = new FormData(event.target);

    // Handle form submission (e.g., send data to a server or update the row directly)
    // Implement your form submission logic here

    // Close the popup form
    closePopup();
});

// Attach the function to the Edit buttons
document.querySelectorAll('.fancy-button').forEach(button => {
    button.addEventListener('click', function () {
        editDriver(this);
    });
});
