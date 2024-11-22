// Track user progress
let userProgress = {
    html: 0,
    javascript: 0,
    python: 0
};

// Start course function
function startCourse(courseName) {
    const courses = {
        html: "Welcome to HTML & CSS! Let's start with your first lesson.",
        javascript: "Welcome to JavaScript! Ready to learn programming?",
        python: "Welcome to Python! Let's explore programming concepts."
    };

    alert(courses[courseName]);
    updateProgress(courseName);
}

// Update progress function
function updateProgress(courseName) {
    userProgress[courseName] += 10;
    if (userProgress[courseName] > 100) {
        userProgress[courseName] = 100;
    }

    // Update progress display
    const courseCard = document.querySelector(`[data-course="${courseName}"]`);
    if (courseCard) {
        const progressElement = courseCard.querySelector('.progress');
        if (!progressElement) {
            const progress = document.createElement('div');
            progress.className = 'progress';
            progress.textContent = `Progress: ${userProgress[courseName]}%`;
            courseCard.appendChild(progress);
        } else {
            progressElement.textContent = `Progress: ${userProgress[courseName]}%`;
        }
    }

    // Check if certificate is earned
    if (userProgress[courseName] === 100) {
        alert(`Congratulations! You've completed the ${courseName.toUpperCase()} course!`);
    }
}

// Initialize progress displays
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(userProgress).forEach(course => {
        const courseCard = document.querySelector(`[data-course="${course}"]`);
        if (courseCard && !courseCard.querySelector('.progress')) {
            const progress = document.createElement('div');
            progress.className = 'progress';
            progress.textContent = 'Progress: 0%';
            courseCard.appendChild(progress);
        }
    });
});