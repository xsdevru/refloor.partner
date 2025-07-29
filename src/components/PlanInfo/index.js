import { Loading } from "../Loading";

export function PlanInfo({ planMonth = null }) {
    if (!planMonth) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Подсчитываем выполнение плана…" />
            </section>
        );
    }

    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Выполнение плана {planMonth}</h2>
        </section>
    );
}