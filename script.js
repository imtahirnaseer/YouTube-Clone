// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Search Bar Filter
document.getElementById('search-bar').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const videos = document.querySelectorAll('.video-card');

    videos.forEach(video => {
        const title = video.querySelector('h4').textContent.toLowerCase();
        video.style.display = title.includes(query) ? '' : 'none';
    });
});
