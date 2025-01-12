/*
// Select elements
const featuresLink = document.getElementById("featuresLink");
const companyLink = document.getElementById("companyLink");
const featuresDropdown = document.getElementById("featuresDropdown");
const companyDropdown = document.getElementById("companyDropdown");

// Function to toggle dropdown visibility
function toggleDropdown(link, dropdown) {
  const isVisible = dropdown.style.display === "block";
  // Hide all dropdowns first
  document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
  // Toggle the current dropdown
  dropdown.style.display = isVisible ? "none" : "block";
}

// Add event listeners for the links
featuresLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  toggleDropdown(featuresLink, featuresDropdown);
});

companyLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  toggleDropdown(companyLink, companyDropdown);
});

// Hide dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item")) {
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
  }
});
*/
// Select dropdown toggles
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown");
    const arrow = item.querySelector(".arrow");

    if (dropdown) {
        // Toggle dropdown and arrow direction on click
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const isVisible = dropdown.style.display === "block";

            // Close all dropdowns
            closeAllDropdowns();

            // Toggle current dropdown and arrow
            if (!isVisible) {
                dropdown.style.display = "block";
                arrow.classList.add("up");
            }
        });
    }
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) {
        closeAllDropdowns();
    }
});

function closeAllDropdowns() {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        dropdown.style.display = "none";
    });
    document.querySelectorAll(".arrow").forEach((arrow) => {
        arrow.classList.remove("up");
    });
}
