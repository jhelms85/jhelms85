fetch('components/slideshow_page.json')
    .then(response => response.json())
    .then(data => {
      data.forEach((image, index) => {
        const slideshowContainer = document.getElementById('slideshow-container');
        const thumbnailContainer = document.getElementById('thumbnail-container');

        const slide = document.createElement('div');
        slide.classList.add('mySlides');
        slide.innerHTML = `
          <div class="numbertext">${index + 1} / ${data.length}</div>
          <img src="${image.filename}" style="width:100%" alt="${image.alt}">
          <div class="caption">${image.caption}</div> <!-- Display the caption -->
          <div class="prompt">${image.prompt}</div> <!-- Display the prompt -->
        `;
        slideshowContainer.appendChild(slide);

        const thumbnail = document.createElement('div');
        thumbnail.classList.add('column');
        thumbnail.innerHTML = `
          <img class="demo cursor" src="${image.filename}" style="width:100%" onclick="currentSlide(${index + 1})" alt="${image.alt}">
        `;
        thumbnailContainer.appendChild(thumbnail);
      });

      showSlides(1);
    })
    .catch(error => console.error('Error fetching JSON:', error));

  let slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }