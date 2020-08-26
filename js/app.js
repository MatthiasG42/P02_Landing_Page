/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// put together all sections in the document into a list
const sections = document.querySelectorAll('section');
// search for the element where the navbar will be stored into
const navMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navSectionHtml = '';
sections.forEach(element => {
    navSectionHtml += `<li><a class="menu-link" data-link="${element.id}" href = "#${element.id}">${element.dataset.nav}</a></li>`;  
});

// insert the nav into the navbar_list
navMenu.insertAdjacentHTML('afterbegin',navSectionHtml);

// getting the Elements of the navbar_list into their own list
const navList = document.querySelectorAll('.menu-link');

// Add class 'active' to section when near top of viewport

// Looking for the section that is closest to the top of the Viewport and then change that one to active
// while setting all the others not active
const activation = () =>
    {
        let minimum = sections[0];
        sections.forEach(element => 
            {
                if (Math.abs(element.getBoundingClientRect().top) <= Math.abs(minimum.getBoundingClientRect().top))
                    {
                        minimum = element;
                    };
                element.classList.remove('your-active-class');
            });
        minimum.classList.add('your-active-class');
            
        // Setting the Link "Button" to active in the background if the Section Name matches
        navList.forEach(element =>
            {
                if (minimum.id == element.dataset.link)
                        element.classList.add('active');
                    else
                        element.classList.remove('active');
            });
    };

// running the check for activation on every 'scroll' event
document.addEventListener('scroll', activation);

// Scroll to anchor ID using scrollTO event
navMenu.addEventListener('click', element => 
    {
        //Stop the <a> link from working
        element.preventDefault();
        // Check if it did not click on the empty part of the navbar. If not, go where the click targeted
        if (element.target.dataset.link != null)
            {
                const scrollTo = document.getElementById(element.target.dataset.link);
                scrollTo.scrollIntoView({behavior: 'smooth'});
            }
    });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


