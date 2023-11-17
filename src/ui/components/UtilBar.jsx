import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const UtilBar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onLogout = () => {
        logout();

        navigate("/login", {
            replace: true,
        });
    };

    const onNavigate = () => {
        switch (pathname) {
            case "/create":
                navigate("/rating", {
                    replace: false,
                });
                break;
            case "/rating":
                navigate("/create", {
                    replace: false,
                });
                break;
            default:
                navigate("/rating", {
                    replace: false,
                });
                break;
        }
    };

    return (
        <div className="alert alert-light title-app" role="alert">
            <div className="title-app-container">
                <p className="text-blue">
                    <small>Hello {user?.username}!</small> <br />
                    <b>Welcome to the Rating App!</b>
                </p>
            </div>
            <div className="buttons">
                <button type="button" className="btn btn-success" onClick={onNavigate}>
                    {pathname === "/create" ? "Return" : "Create a post"}
                </button>
                <button type="button" className="btn btn-danger logout-btn" onClick={onLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};
