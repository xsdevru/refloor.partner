import { Loading } from "../Loading";

export function CuratorInfo({ curator = null }) {
    if (!curator) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Загружаем информацию о кураторе..." />
            </section>
        );
    }

    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Ваш куратор</h2>
            <p>{curator.name}</p>
            <p>{curator.phone}</p>
            <p>{curator.email}</p>
        </section>
    );
}