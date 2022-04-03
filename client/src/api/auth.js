import request from "./request";

const signup = (data) => {
  return request.post("/users/signup", data);
};

export default { signup };
