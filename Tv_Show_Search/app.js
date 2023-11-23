
//Select elements
const form = document.querySelector('#searchForm');
const searchInput = document.querySelector('input');
//Listen for the event and prevent the default behavior
//Capture and store the input value
//Pass in the url and the query string
//Call makeImages function and clear the input field
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})
//Loop over the shows property and create image
//Add image sorce and append image to the body

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
//Delete images after every search
const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
     for(let img of imgs){
        img.remove();
     }
    }
//Listen for input click and delete images
searchInput.addEventListener('click', deleteImgs);
