// src/AppRoutes.tsx
import React from "react";
import HomePage from "./pages/HomePage";
import VideoEditor from "./pages/VideoEditor";
import BaseLayout from "./layouts/BaseLayout";
import { useActivePage } from "./context/ActivePageContext";

const AppRoutes: React.FC = () => {
    const { activePage } = useActivePage();
    console.log(activePage,"test")
    return (
        <BaseLayout>
            {activePage == "home" && <HomePage />}
            {activePage == "editor" && <VideoEditor />}
        </BaseLayout>
    );
};

export default AppRoutes;
