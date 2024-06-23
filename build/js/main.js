const initApp = () => {
  // Get references to the hamburger button and mobile menu elements
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Function to handle toggling the visibility of the mobile menu
  const toggleMenu = () => {
    // Toggle the 'hidden' and 'flex' classes on the mobileMenu element
    // This effectively shows/hides the menu based on current visibility
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  // Click event listener to the hamburger mobile-menu button

  // When clicked, it calls the toggleMenu function
  hamburgerBtn.addEventListener("click", toggleMenu);

  // When clicked, it calls the toggleMenu function
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

const navDropDown = () => {
  const homeNav = document.getElementById("home");
  const homeNavMenu = document.getElementById("home-nav-menu");
  
  const mouseOverMenu = () => {
    homeNavMenu.classList.toggle("hidden");
    homeNavMenu.classList.toggle("flex");
    homeNav.classList.toggle("toggle-btn");
  };

  homeNav.addEventListener("mouseover", mouseOverMenu);
  homeNavMenu.addEventListener("mouseover", mouseOverMenu);
};

document.addEventListener("DOMContentLoaded", navDropDown);


// const navDropDown = () => {
//     const homeNav = document.getElementById("home");
//     const homeNavMenu = document.getElementById("home-nav-menu");
  
//     const mouseOverMenu = (event) => {
//       // Check if mouse leaves the dropdown itself (for better UX)
//       if (!event.target.closest("#home-nav-menu")) {
//         homeNavMenu.classList.toggle("hidden");
//       }
//     };
  
//     homeNav.addEventListener("mouseover", mouseOverMenu);
//     homeNavMenu.addEventListener("mouseout", mouseOverMenu);
//   };
  
//   document.addEventListener("DOMContentLoaded", navDropDown);
  