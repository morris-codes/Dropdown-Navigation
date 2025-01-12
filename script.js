
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

