import { useEffect, useState } from "react";
import { CardSmall } from "../components/CardSmall";
import {
    addCommentHelper,
    addRatingHelper,
    getPostByIdHelper,
    getPostsHelper,
    getRatePostByIdHelper,
} from "../helpers/PostsHelper";
import "../styles/ratingPageCss.css";
import { MainCard } from "../components/MainCard";

export const RatingPage = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [rate, setRate] = useState({});

    const getAllPosts = async () => {
        const newPosts = await getPostsHelper();
        await onGetPostInfo(newPosts[0].id);
        setPosts(newPosts);
    };

    const onGetPostInfo = async (postId) => {
        const postById = await getPostByIdHelper(postId);
        const postRatingByUser = await getRatePostByIdHelper(postId);
        setPost(postById.post);
        setRate(postRatingByUser);
    };

    const onRate = async (rateNumber) => {
        setRate({ isRate: false, rate: rateNumber });
    };

    const onComment = async (stars, commentPayload) => {
        const payloadRate = {
            postId: post._id,
            rate: stars,
        };

        const payloadComment = {
            comment: commentPayload,
            postId: post._id,
        };

        if (commentPayload) {
            await addCommentHelper(payloadComment);
        }

        if (!rate.isRate) {
            await addRatingHelper(payloadRate);
        }

        onGetPostInfo(post._id);
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="cards-container">
                            <span className="title">
                                <b>Select the cards in order to evaluate them</b>
                            </span>
                            <div className="cards-list">
                                {posts.map((post) => (
                                    <CardSmall
                                        key={post.id}
                                        {...post}
                                        onClickCard={(value) => onGetPostInfo(value)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MainCard
                            post={post}
                            rateData={rate}
                            onAddRate={(value) => onRate(value)}
                            onSubmitComment={(stars, comment) => onComment(stars, comment)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
