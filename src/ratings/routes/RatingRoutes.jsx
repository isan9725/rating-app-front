import { Navigate, Route, Routes } from "react-router-dom";
import { RatingPage } from "../pages/RatingPage";
import { UtilBar } from "../../ui/components/UtilBar";
import { CreatePost } from "../pages/CreatePost";

export const RatingRoutes = () => {
    return (
        <>
            <UtilBar />

            <Routes>
                <Route path="rating" element={<RatingPage />} />
                <Route path="create" element={<CreatePost />} />

                <Route path="/" element={<Navigate to="/rating" />} />
            </Routes>
        </>
    );
};
