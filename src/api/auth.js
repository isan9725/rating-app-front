import api from "./api";

export const registerRequest = (user) => api.post("/register", user);

export const loginRequest = (user) => api.post("/login", user);
