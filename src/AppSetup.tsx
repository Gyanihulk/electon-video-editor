import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { syncThemeWithLocal } from "./helpers/theme_helpers";
import { updateAppLanguage } from "./helpers/language_helpers";
import { ActivePageProvider } from "./context/ActivePageContext";

const AppSetup = ({ children }: { children: React.ReactNode }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        syncThemeWithLocal();
        updateAppLanguage(i18n);
    }, [i18n]);

    return (
    
            <ActivePageProvider>{children}</ActivePageProvider>
        
    );
};

export default AppSetup;
