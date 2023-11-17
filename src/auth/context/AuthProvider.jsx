import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";
import { loginRequest } from "../../api/auth.js";

const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user: user,
    };
};

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = async (email = "", password = "") => {
        const user = {
            email: email,
            password: password,
        };

        try {
            const response = await loginRequest(user);

            const action = {
                type: types.login,
                payload: response.data,
            };

            localStorage.setItem("user", JSON.stringify(response.data));

            dispatch(action);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        const action = {
            type: types.logout,
        };
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
