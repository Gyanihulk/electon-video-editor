import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";
import AppSetup from "./AppSetup";
import AppRoutes from "./AppRoutes";

export default function App() {
    return (
        <AppSetup>
            <AppRoutes />
        </AppSetup>
    );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
