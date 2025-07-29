import { Loading } from "../Loading";

export function OrdersHistory({ orders }) {
    if (!orders) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Загружаем историю заказов..." />
            </section>
        );
    }

    return (
        <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">История заказов</h2>
            <table className="w-full table-fixed border-collapse border border-gray-300 dark:border-gray-700 text-sm">
                <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Дата</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Площадь</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Цена</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Статус</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(({ date, area, price, status }, i) => (
                    <tr
                        key={i}
                        className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                    >
                        <td className="border border-gray-300 dark:border-gray-600 p-2">{date}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">{area}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">{price}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-2">{status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="mt-2 text-blue-500 cursor-pointer hover:underline select-none">
                Посмотреть все
            </div>
        </section>
    );
}
