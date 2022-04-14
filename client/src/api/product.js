import request from "@/api/request";

const getAllProducts = (category) => {
  return request.get(`/products/${category}`);
};

const getProduct = (categery, id) => {
  return request.get(`/products/${categery}/${id}`);
};

export default { getAllProducts, getProduct };
