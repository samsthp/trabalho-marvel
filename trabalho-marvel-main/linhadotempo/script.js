document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.timeline-item.highlight').forEach(i => i.classList.remove('highlight'));
            item.classList.add('highlight');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });

    window.addEventListener('load', () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    item.classList.add('fade-in'); 
                }, index * 150); 
            });
        });
    });
});

function filterTimeline(type) {
    document.querySelectorAll('.timeline-item').forEach(item => {
        if (type === 'all' || item.getAttribute('data-type') === type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
