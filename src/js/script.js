const lightbox = document.querySelector("#lightbox");

const lightboxImage = document.querySelector("#lightbox img");

lightbox?.addEventListener("click", () => lightbox.close());
document.body.addEventListener("click", (evt) => {
    if (!evt.target.matches("[data-full-img]")) return;
    lightboxImage.src = evt.target.dataset.fullImg;
    lightbox.showModal();
});
// *** LIGHTBOX ***
