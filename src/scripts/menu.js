

// Select the Hamburger menu
// Add a click event listener that toggles the expanded class
// on the html element that that has the 'nav-links' class
document.querySelector('.hamburger').addEventListener('click', () => {
    console.log("Hello world")

    let result = document.querySelector('.nav-links').classList.toggle('expanded');
    console.log(result);
});