import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const preview = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item">
        <a class="gallery__link" href=${img.original}>
            <img
            class="gallery__image"
            src= ${img.preview}
            data-source= ${img.original}
            alt= ${img.description}
            />
        </a>
    </li>`
  )
  .join("");
const image = preview;
gallery.innerHTML = image;
gallery.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source} width="800" height="600">
`);

  instance.show();

  gallery.addEventListener("keydown", onKey);
  function onKey(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
