import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const galleryList = document.querySelector('ul.gallery');
export function renderImages(data) {
 
  const galleryMarkup = data
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  // Initialize SimpleLightbox
  const galleryCfg = {
    captionsData: 'alt',
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}