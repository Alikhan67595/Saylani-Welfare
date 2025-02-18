// Get elements
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

// Toggle sidebar on menu button click
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close sidebar on close button click
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});


