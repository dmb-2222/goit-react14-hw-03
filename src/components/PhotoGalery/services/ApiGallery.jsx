import axios from "axios";

export const getPhoto = () => {
  const key = "12916559-bca9cacbc431a253364f58898";
  return axios
    .get(
      `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo&orientation=horizontal&page=1&per_page=12`
    )
    .then(data => data.data.hits);
};