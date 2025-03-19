let currentIndex = 1; // Start with the second image as active
const testimonials = [
  {
    text: `“Tech Udaan has been a game-changer for me! The career roadmaps and one-on-one counseling sessions helped me gain clarity and confidence in my career path. Highly recommended!”`,
    author: "Rutuja",
    stars: "★★★★★",
    image: "user1.jpg",
  },
  {
    text: `“Thanks to Tech Udaan, I landed my dream internship! The resources and guidance provided by the team are top-notch. A must for every student!”`,
    author: "Sanika",
    stars: "★★★★★",
    image: "user2.jpg",
  },
  {
    text: `“Tech Udaan made learning fun and easy. The Python roadmap helped me master the basics and land my first freelance project. Truly inspiring!”`,
    author: "pratham",
    stars: "★★★★★",
    image: "user3",
  },
//   {
//     text: `“The customer service team was so helpful and guided me to select the perfect plants for my home. Such a delightful experience!”`,
//     author: "Simran Kapoor",
//     stars: "★★★★★",
//     image: "user4.jpg",
//   },
//   {
//     text: `“I've been a plant parent for years, but the quality of plants from Ugaoo is truly exceptional. Highly recommend their services!”`,
//     author: "Arjun Verma",
//     stars: "★★★★★",
//     image: "user5.jpg",
//   },
];

const testimonialText = document.querySelector(".testimonial-content p");
const testimonialAuthor = document.querySelector(".author");
const testimonialStars = document.querySelector(".stars");
const sliderImages = document.querySelectorAll(".testimonial-slider img");

function updateTestimonial(index) {
  testimonialText.textContent = testimonials[index].text;
  testimonialAuthor.textContent = `– ${testimonials[index].author}`;
  testimonialStars.textContent = testimonials[index].stars;

  sliderImages.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    img.classList.toggle("hidden", Math.abs(i - index) > 1);
  });
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
}

sliderImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateTestimonial(currentIndex);
  });
});

updateTestimonial(currentIndex);
