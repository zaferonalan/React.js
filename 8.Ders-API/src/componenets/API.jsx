import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID VcxHgkuGgIFRHl7wwq-n0iNP9lMbGYgubYjFvWRmHHU",
    },
    params: {
      query: term,
    },
  });
  debugger;

  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
