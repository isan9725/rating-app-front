import { useNavigate } from "react-router-dom";
import "../styles/LoginPageCss.css";
import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { formState, onInputChange, email, password } = useForm({
        email: "",
        password: "",
    });

    const onLogin = async () => {
        const result = await login(email, password);

        if (result) {
            navigate("/", {
                replace: true,
            });
        } else {
            navigate("/login", {
                replace: true,
            });
        }
    };

    const onRegister = () => {
        navigate("/register", {
            replace: false,
        });
    };

    return (
        <>
            <div className="form-sigin text-center">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={onInputChange}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={onInputChange}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button
                    className="w-100 btn btn-lg btn-primary sigin-btn"
                    type="button"
                    onClick={onLogin}
                >
                    Sign in
                </button>

                <button
                    className="w-100 btn btn-lg btn-secondary"
                    type="button"
                    onClick={onRegister}
                >
                    Register
                </button>
            </div>
        </>
    );
};
