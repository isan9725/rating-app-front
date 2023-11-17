import { AuthProvider } from "./auth/context";
import { AppRouter } from "./router/AppRouter";

export const RatingApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};
