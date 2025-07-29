import {Moon, Sun} from "lucide-react";

export function Profile({ user, userId, theme }) {
    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow text-center">
            {user?.photo_url && (
                <img
                    src={user.photo_url}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700"
                />
            )}
            <h2 className="text-xl font-semibold">
                {user?.first_name} {user?.last_name}
            </h2>
            {user?.username && <p className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</p>}
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">ID: {user?.id ?? "не определён"}</p>

            <br />
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </section>
    );
}