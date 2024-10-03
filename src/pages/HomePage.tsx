import React from "react";
import ToggleTheme from "@/components/ToggleTheme";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";
import { useActivePage } from "@/context/ActivePageContext";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    const { t } = useTranslation();
    const { setActivePage } = useActivePage();
    const handlePlay = () => {
        setActivePage("editor");
    };
    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center gap-2">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <LangToggle />
                <ToggleTheme />

                <Button
                    onClick={() => {
                        setActivePage("editor");
                    }}
                    size="icon"
                >
                    Video Editor
                </Button>
            </div>
        </>
    );
}
