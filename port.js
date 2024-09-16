document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links that reference sections
    const navLinks = document.querySelectorAll('nav ul li a[data-section]');
    // Select all content sections
    const sections = document.querySelectorAll('.content-section');

    // Add event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent the default anchor behavior

            // Get the section to be displayed from the data-section attribute
            const sectionId = link.getAttribute('data-section');

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // Show the clicked section
            const sectionToShow = document.getElementById(sectionId);
            sectionToShow.classList.add('active');
            sectionToShow.style.display = 'block';
        });
    });

    // Select all project and skill tiles
    const tiles = document.querySelectorAll('.tile');
    // Select the project details container
    const projectDetails = document.getElementById('project-details');
    // Select the project information display area
    const projectInfo = document.getElementById('project-info');
    // Select the close button
    const closeButton = document.getElementById('close-btn');

    // Add event listener to each tile (for both projects and skills)
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Get the data-info attribute value of the clicked tile
            const info = tile.getAttribute('data-info');
            // Set the project info div's content to the retrieved info
            projectInfo.textContent = info;
            // Show the project details container
            projectDetails.classList.remove('hidden');
        });
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', () => {
        // Hide the project details container
        projectDetails.classList.add('hidden');
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
