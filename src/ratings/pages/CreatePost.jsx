import { useForm } from "../../hooks/useForm";
import { addPostHelper } from "../helpers/PostsHelper";

export const CreatePost = () => {
    const { formState, onInputChange, postName, postImage, description } = useForm({
        postName: "",
        postImage: "",
        description: "",
    });

    const onAddPost = async () => {
        try {
            const payload = {
                title: postName,
                description: description,
                urlImage: postImage,
            };
            await addPostHelper(payload);

            onInputChange({ target: { name: "postName", value: "" } });
            onInputChange({ target: { name: "postImage", value: "" } });
            onInputChange({ target: { name: "description", value: "" } });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="mb-3">
                            <label htmlFor="post-name" className="form-label">
                                Post Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="post-name"
                                name="postName"
                                value={postName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="post-image" className="form-label">
                                Post image url
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="post-image"
                                name="postImage"
                                value={postImage}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description for the post
                            </label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                name="description"
                                value={description}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={onAddPost}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
