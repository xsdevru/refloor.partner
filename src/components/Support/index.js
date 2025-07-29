import React, { useState } from "react";

export function Support() {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        // Здесь можно добавить отправку сообщения на сервер или в Telegram
        setStatus("Ваше сообщение отправлено!");
        setMessage("");
        setTimeout(() => setStatus(null), 3000);
    }

    return (
        <section className="max-w-md mx-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Задать вопрос</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 mb-4 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    rows={5}
                    placeholder="Напишите ваше сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Отправить
                </button>
            </form>
            {status && <p className="mt-2 text-green-500">{status}</p>}
        </section>
    );
}
