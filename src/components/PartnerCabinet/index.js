import React, { useEffect, useState } from "react";
import { Home, Package, User } from "lucide-react";
import { useTelegramWebApp } from "../../hooks/useTelegramWebApp";
import { Header } from "../Header";
import {CuratorInfo} from "../CuratorInfo";
import {PlanInfo} from "../PlanInfo";
import {Ranking} from "../Ranking";
import {OrdersHistory} from "../OrderHistory";
import {Publications} from "../Publications";
import {PartnerCard} from "../PartnerCard";
import {Profile} from "../Profile";
import {BottomNav} from "../BottomNav";
import {Support} from "../Support";

const data = {
    curator: {
        name: "Белова Наталья",
        phone: "8-913-380-13-04",
        email: "nataly@refloor-nsk.ru",
    },
    planMonth: "Март 2025",
    ranking: [
        { value: 92, change: 48 },
        { value: 145, change: 10 },
    ],
    orders: [
        { date: "07.04.2024", area: "20м2", price: "10 100 руб", status: "Резерв" },
        { date: "05.04.2024", area: "16м2", price: "9 800 руб", status: "Отгружено" },
        { date: "03.04.2024", area: "100м2", price: "92 100 руб", status: "Отгружено" },
    ],
    sites: ["Decorroom", "quartzparquet.ru"],
    chatbots: ["8-913-018-07-74", "8-913-018-07-75"],
    partner: {
        name: "Decorroom",
        phone: "8-913-018-07-75",
        email: "floor@deconsk.ru",
    },
};

export default function PartnerCabinet() {
    const { theme, userId, user } = useTelegramWebApp();
    const [activeTab, setActiveTab] = useState("home");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                // Замените URL на ваш реальный API эндпоинт
                const response = await fetch("https://crm.refloor-nsk.ru/build/init.php");
                if (!response.ok) throw new Error("Ошибка загрузки данных");
                const json = await response.json();
                setData(json);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Header */}
            <Header partnerName={data?.partner?.name} />

            {/* Content */}
            <main className="flex-grow overflow-auto p-4">
                {activeTab === "home" && (
                    <>
                        {/* Куратор */}
                        <CuratorInfo curator={data?.curator} />

                        {/* План */}
                        <PlanInfo planMonth={data?.planMonth} />

                        {/* Рейтинг */}
                        <Ranking ranking={data?.ranking} />

                    </>
                )}

                {activeTab === "orders" && (
                    <>
                        {/* История заказов */}
                        <OrdersHistory orders={data?.orders} />
                    </>

                )}

                {activeTab === "profile" && (
                    <>
                        <Profile user={user} userId={userId} theme={theme} />
                        {loading ? (
                            <div>...</div>
                        ) : (
                            <>
                                <PartnerCard partner={data?.partner} />
                                <Publications sites={data?.sites} />
                            </>

                        )}

                    </>
                )}

                {activeTab === "support" && (
                    <Support />
                )}
            </main>

            {/* Bottom navigation */}
            <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}
