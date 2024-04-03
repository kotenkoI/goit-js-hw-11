// export function fetchImages(query) {
//     return fetch(
//         `https://pixabay.com/api/?key=43130962-c664da34f6898978b873c66fd&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
//     ).then(response => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
// }
export function fetchImages(query) {
    const wayKey = "43130962-c664da34f6898978b873c66fd";
    const params = new URLSearchParams({
        key: wayKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
      const baseUrl = 'https://pixabay.com/api/';
    const url = `${baseUrl}?${params}`;
   
    return fetch(url).then(res => res.json());
}