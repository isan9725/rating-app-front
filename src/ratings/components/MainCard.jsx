import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { CommentSection } from "./commentSection";
import { getPostCommentsHelper } from "../helpers/PostsHelper";

export const MainCard = ({ post, rateData, onAddRate, onSubmitComment }) => {
    const { formState, onInputChange, addComment } = useForm({
        addComment: "",
    });

    const [stars, setStars] = useState(0);

    const [comments, setComments] = useState([]);

    const checkValue = (number) => {
        setStars(number);
        onAddRate(number);
    };

    const getComments = async () => {
        const Comments = await getPostCommentsHelper(post._id);
        setComments(Comments);
    };

    useEffect(() => {
        if (post._id) getComments();
    }, [post]);

    const onSendComment = async () => {
        onSubmitComment(stars, addComment);
        onInputChange({ target: { name: "addComment", value: "" } });
    };

    return (
        <div className="single-card">
            <div className="image-container">
                <img src={post.imageLink} alt="Some image" />
            </div>
            <div className="post-title-rate">
                <div className="name">{post.title}</div>
                <div className="rate">
                    <div className="star">
                        <i
                            className={
                                rateData.isRate
                                    ? rateData.rate >= 1
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    : stars >= 1
                                    ? "bi bi-star-fill"
                                    : "bi bi-star"
                            }
                            onClick={() => checkValue(1)}
                        ></i>
                    </div>
                    <div className="star">
                        <i
                            className={
                                rateData.isRate
                                    ? rateData.rate >= 2
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    : stars >= 2
                                    ? "bi bi-star-fill"
                                    : "bi bi-star"
                            }
                            onClick={() => checkValue(2)}
                        ></i>
                    </div>
                    <div className="star">
                        <i
                            className={
                                rateData.isRate
                                    ? rateData.rate >= 3
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    : stars >= 3
                                    ? "bi bi-star-fill"
                                    : "bi bi-star"
                            }
                            onClick={() => checkValue(3)}
                        ></i>
                    </div>
                    <div className="star">
                        <i
                            className={
                                rateData.isRate
                                    ? rateData.rate >= 4
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    : stars >= 4
                                    ? "bi bi-star-fill"
                                    : "bi bi-star"
                            }
                            onClick={() => checkValue(4)}
                        ></i>
                    </div>
                    <div className="star">
                        <i
                            className={
                                rateData.isRate
                                    ? rateData.rate >= 5
                                        ? "bi bi-star-fill"
                                        : "bi bi-star"
                                    : stars >= 5
                                    ? "bi bi-star-fill"
                                    : "bi bi-star"
                            }
                            onClick={() => checkValue(5)}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="description-post">
                <p>{post.description}</p>
            </div>
            <div className="comment-container">
                <div className="form-floating">
                    <textarea
                        className="form-control text-area-post-comment"
                        id="comment-post"
                        name="addComment"
                        value={addComment}
                        onChange={onInputChange}
                    ></textarea>
                    <label htmlFor="comment-post">Comments</label>
                </div>
            </div>
            <div className="submit-button-container">
                <button type="button" className="btn btn-primary" onClick={onSendComment}>
                    Submit
                </button>
            </div>
            <div className="comments">
                {comments.map((comm) => (
                    <CommentSection key={comm._id} comment={comm} />
                ))}
            </div>
        </div>
    );
};
