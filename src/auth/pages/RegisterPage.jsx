import { useForm } from "../../hooks/useForm";
import { registerRequest } from "../../api/auth.js";
import "../styles/RegisterPageCss.css";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const { formState, onInputChange, name, email, password } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const onRegister = async () => {
        try {
            await registerRequest({ username: name, email: email, password: password });

            navigate("/login", {
                replace: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="register-container">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        aria-describedby="emailHelp"
                        value={name}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pass"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={onRegister}>
                    Register
                </button>
            </div>
        </>
    );
};
