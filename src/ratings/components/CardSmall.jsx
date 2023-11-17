export const CardSmall = ({ id, title, imageLink, rate, onClickCard }) => {
    const clickId = () => {
        onClickCard(id);
    };

    return (
        <div className="card" onClick={clickId}>
            <img src={imageLink} alt="Some image" />
            <div className="card-title">
                <div className="name">{title}</div>
                <div className="rate">
                    <span className="number">{rate}</span>
                    <div className="star">
                        <i className="bi bi-star-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
