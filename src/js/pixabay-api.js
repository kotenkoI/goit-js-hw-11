import { galleryList } from '../main';
import { query } from '../main';
export function fetchImages(query) {
    return fetch(
        `https://pixabay.com/api/?key=43130962-c664da34f6898978b873c66fd&q${query}&image_type=photo&orientation=horizontal&safesearch=true`
    ).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}