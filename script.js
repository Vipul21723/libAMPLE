// Select the input and icon elements
const searchInput = document.querySelector("header .sub-header .container input");
const searchIcon = document.querySelector("header .sub-header .container .icon");

// Toggle visibility and move the icon when the icon is clicked
searchIcon.addEventListener("click", function() {
  // Toggle the 'show' class to show or hide the input
  searchInput.classList.toggle("show");
  searchIcon.style.display = "none"

  // Toggle the 'clicked' class to move the icon and change its background color
//   searchIcon.classList.toggle("clicked");

//   // Optional: You can add a submit action when clicking the button
//   // if the input is visible
//   if (searchInput.classList.contains("show")) {
//     // Simulate a submit action (you can customize this as needed)
//     console.log("Search submitted!");
//   }
});

