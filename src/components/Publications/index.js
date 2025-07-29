import {Loading} from "../Loading";

export function Publications({ sites, chatbots }) {
    if (!sites || sites.length === 0) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Подгружаем точки продаж..." />
            </section>
        );
    }

    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Статусы и публикации</h2>
            <ul className="list-disc list-inside space-y-1">
                {sites.map((site, i) => (
                    <li key={i}>{site}</li>
                ))}
            </ul>
        </section>
    );
}
