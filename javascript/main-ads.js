


document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.slide');

    let num = 1;

    function showSlides() {
      // Hide the current item
      document.querySelector(`.item${num}`).style.display = 'none';

      // Increment the current item index
      num = (num % 7) + 1;

      // Show the next item
      document.querySelector(`.item${num}`).style.display = 'block';
    }

    // Initial setup
    for (let i = 2; i <= 7; i++) {
      const slide = document.querySelector('.slide');
      slide.insertAdjacentHTML("beforeend",
        `<div class="slide-items item${i}">
          <img src="images/main${String(i).padStart(2, '0')}.jpeg" alt="">
          <span>${i}/${7}</span>
        </div>`);
    }

    // Set interval for the slideshow
    setInterval(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
  });

