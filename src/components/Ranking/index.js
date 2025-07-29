import { Loading } from "../Loading";

export function Ranking({ ranking = null }) {
    if (!ranking) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Подсчитываем ваши успехи..." />
            </section>
        );
    }

    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-around">
            {ranking.map(({ value, change }, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="text-green-500">↑{change} место</div>
                </div>
            ))}
        </section>
    );
}