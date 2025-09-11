// document.getElementById('reportIssueBtn').addEventListener('click', () => {
//       alert('The Paurya AI Assistant would launch here to guide you through reporting the issue.');
//     });

// --- Main Action Button Logic ---
document.getElementById('mainActionBtn').addEventListener('click', () => {
  // A non-blocking UI element would be better in a real app,
  // but alert is fine as a placeholder for the hackathon.
  alert('The Paurya AI Assistant would launch here to guide you through reporting the issue.');
});


// --- Header Visibility Logic ---
const header = document.querySelector('.header');
const showHeaderMark = 150; // The scroll distance (in pixels) to show the header

window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the mark
  if (window.scrollY > showHeaderMark) {
    // If yes, add the class to make it visible
    header.classList.add('header-visible');
  } else {
    // If not, remove the class to hide it again
    header.classList.remove('header-visible');
  }
});
