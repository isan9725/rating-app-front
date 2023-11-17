import {
    addPost,
    commentAPost,
    getPostById,
    getPostCommentByPostId,
    getPosts,
    getRatePostById,
    ratePost,
} from "../../api/post.js";

export const getPostsHelper = async () => {
    const res = await getPosts();
    const { data } = res;

    const posts = data.map((post) => ({
        id: post._id,
        title: post.title,
        imageLink: post.imageLink,
        rate: post.rate,
    }));

    return posts;
};

export const getPostByIdHelper = async (id) => {
    const res = await getPostById(id);

    const { data } = res;

    return data;
};

export const getRatePostByIdHelper = async (id) => {
    const res = await getRatePostById(id);

    const { data } = res;

    return data;
};

export const getPostCommentsHelper = async (id) => {
    const res = await getPostCommentByPostId(id);

    const { data } = res;

    return data;
};

export const addRatingHelper = async (rating) => {
    const res = await ratePost(rating);

    const { data } = res;

    return data;
};

export const addCommentHelper = async (payload) => {
    const res = await commentAPost(payload);

    const { data } = res;

    return data;
};

export const addPostHelper = async (payload) => {
    const res = await addPost(payload);

    const { data } = res;

    return data;
};
