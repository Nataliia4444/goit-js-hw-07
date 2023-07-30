import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const img = galleryItems
  .map(
    (img) => `<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src=${img.preview} alt=${img.description} />
   </a>
</li>`
  )
  .join("");
const image = img;
gallery.innerHTML = image;
// const lightbox = new SimpleLightbox(".gallery a", {
//   /* options */
// });
// shown.simplelightbox();
let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  // do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});
