export const CommentSection = ({ comment }) => {
    return (
        <div className="mt-2">
            <div className="d-flex flex-row">
                <img
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                />

                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <span className="mr-2">User</span>
                        </div>
                    </div>

                    <p className="text-justify comment-text mb-0">{comment.comment}</p>
                </div>
            </div>
        </div>
    );
};
