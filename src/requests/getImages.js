import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`http://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (index) => index.data[0].media_type === "image"
        );
        const images = parsedImages.map((image) => image.links[0].href);

        return images;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default getImages;
