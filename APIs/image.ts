import Axios from "axios";
export const imageUploadAPI = async (e) => {
  const image = e.target?.files[0];
  const formData = new FormData();
  formData.append("img", image);
  return await Axios.post("/image/upload", formData).then((res) => {
    return res.data.avatar;
  });
};
