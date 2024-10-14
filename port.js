document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that reference sections
    const navLinks = document.querySelectorAll('nav ul li a[data-section]');
    // Select all content sections
    const sections = document.querySelectorAll('.content-section');

    // Function to show a specific section
    const showSection = (sectionId) => {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Show the clicked section
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.classList.add('active');
        sectionToShow.style.display = 'block';
    };

    // Add event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default anchor behavior

            // Get the section to be displayed from the data-section attribute
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId); // Call the function to show the section

            projectDetails.forEach((el) => el.classList.add('hidden'));
        });
    });

    // Project details handling
    const tiles = document.querySelectorAll('.tile');
    const projectDetails = document.querySelectorAll('.dynamic-project-details');
    const projectImages = document.querySelectorAll('.project-image');
    const projectDescriptions = document.querySelectorAll('.project-description');
    const projectLinks = document.querySelectorAll('.project-link'); // For project link
    const closeButtons = document.querySelectorAll('.close-btn');

    // Function to open project details
    const openProjectDetails = (tile) => {
        // Get the data-info, data-image, and data-link attributes from the clicked tile
        const description = tile.getAttribute('data-info');
        const imageSrc = tile.getAttribute('data-image');
        const linkHref = tile.getAttribute('data-link');

        // Set the image src, description text, and link href
        projectImages.forEach((el) => el.src = imageSrc);
        projectDescriptions.forEach((el) => el.textContent = description);
        projectLinks.forEach((el) => el.href = linkHref); // Update the link to the clicked project

        // Show the project details container
        projectDetails.forEach((el) => el.classList.remove('hidden'));
    };

    // Add event listener to each tile
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            openProjectDetails(tile); // Call the function to open project details
        });
    });

    // Add event listener to the close button
    closeButtons.forEach((el) => {
            el.addEventListener('click', () => {
            // Hide the project details container
            projectDetails.forEach((el) => el.classList.add('hidden'));
        });
    });

    // Handle the shrinking header functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});
