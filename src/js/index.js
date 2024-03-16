// Array of image URLs to be displayed
const images = [
  'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
  'https://images.unsplash.com/photo-1665686306265-c52ee9054479?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
  'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
  'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
];

// Function to create and append the image elements
function displayImages(imageUrls) {
  const gallery = document.getElementById('imageGallery');

  imageUrls.forEach((url, index) => {
      const col = document.createElement('div');
      col.className = 'col-sm-12 col-md-6 col-lg-2';

      const label = document.createElement('label');
      label.className = 'image-checkbox';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'image-checkbox-input';

      const span = document.createElement('span');
      span.className = 'image-background';
      span.dataset.bg = url; // Store the URL in data-bg attribute

      //SVG for the checkmark square
      const svgMarkup = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.8125 10.3125C2.81248 2.81253 2.81255 2.8126 10.3126 2.81255" stroke="#F60062" stroke-width="2"/>
      <path d="M10.3125 21.5C2.81253 21.5 2.8126 21.5 2.81255 13.9999" stroke="#F60062" stroke-width="2"/>
      <path d="M21.5 14C21.5 21.5 21.5 21.4999 13.9999 21.4999" stroke="#F60062" stroke-width="2"/>
      <path d="M14 2.8125C21.5 2.81248 21.4999 2.81255 21.4999 10.3126" stroke="#F60062" stroke-width="2"/>
      </svg>
      `
      const svgContainer = document.createElement('div');
      svgContainer.className = 'svg-icon';
      svgContainer.style.position = 'absolute';
      svgContainer.style.top = '15px';
      svgContainer.style.left = '15px';
      svgContainer.innerHTML = svgMarkup;


      label.appendChild(input);
      label.appendChild(span);
      label.appendChild(svgContainer);
      col.appendChild(label);
      gallery.appendChild(col);
  });
}

// Lazy loading with Intersection Observer
function lazyLoad() {
  const imageBackgrounds = document.querySelectorAll('.image-background');

  const config = {
      rootMargin: '0px',
      threshold: 0
  };

  let observer = new IntersectionObserver(function(entries, self) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Get the span and update its backgroundImage with the data-bg value
              const span = entry.target;
              span.style.backgroundImage = `url('${span.dataset.bg}')`;
              // Stop watching and load the image
              self.unobserve(entry.target);
          }
      });
  }, config);

  imageBackgrounds.forEach(background => {
      observer.observe(background);
  });
}

// Ensure the DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
  displayImages(images);
  lazyLoad();
});