import { useEffect, useState } from "react";

export function useTelegramWebApp() {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tg = window.Telegram && window.Telegram.WebApp;

        if (!tg) {
            // Не в Telegram — отладка
            setUser({
                id: 272473359,
                first_name: "Тест",
                last_name: "Пользователь",
                username: "testuser",
                photo_url: "https://t.me/i/userpic/320/test.jpg"
            });
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            return;
        }

        // В Telegram WebApp
        const unsafeUser = tg.initDataUnsafe?.user;
        if (unsafeUser) {
            setUser(unsafeUser);
        }

        function updateTheme() {
            setTheme(tg.colorScheme === "dark" ? "dark" : "light");
        }

        updateTheme();
        tg.onEvent("themeChanged", updateTheme);

        return () => {
            tg.offEvent("themeChanged", updateTheme);
        };
    }, []);

    return { theme, user };
}