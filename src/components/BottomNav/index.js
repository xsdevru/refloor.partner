import {Home, MessageCircle, Package, User} from "lucide-react";

export function BottomNav({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "home", icon: <Home size={20} />, label: "Главная" },
        { id: "orders", icon: <Package size={20} />, label: "Заказы" },

        { id: "profile", icon: <User size={20} />, label: "Профиль" },
        { id: "support", icon: <MessageCircle size={20} />, label: "Поддержка" }, // Обратная связь
    ];

    return (
        <nav className="flex border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            {tabs.map(({ id, icon, label }) => (
                <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-grow py-3 flex flex-col items-center justify-center ${
                        activeTab === id
                            ? "text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-gray-600 dark:text-gray-400"
                    }`}
                    aria-label={label}
                >
                    {icon}
                    <span className="text-xs mt-1">{label}</span>
                </button>
            ))}
        </nav>
    );
}