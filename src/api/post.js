import api from "./api";

export const getPosts = () => api.get("/posts");

export const addPost = (payload) => api.post("/post", payload);

export const getPostById = (postId) => api.get(`/post/${postId}`);

export const ratePost = (payload) => api.post("/ratePost", payload);

export const commentAPost = (payload) => api.post("/postComment", payload);

export const getPostCommentByPostId = (postId) => api.get(`/postComment/${postId}`);

export const getRatePostById = (postId) => api.get(`/getRatePost/${postId}`);
