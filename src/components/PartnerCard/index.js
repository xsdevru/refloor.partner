import {Loading} from "../Loading";

export function PartnerCard({ partner }) {
    if (!partner) {
        return (
            <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow flex justify-center items-center h-24">
                <Loading text="Собираем адреса и телефоны..." />
            </section>
        );
    }

    return (
        <section className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Карточка партнёра</h2>
            <p>{partner.name}</p>
            <p>Тел.: {partner.phone}</p>
            <p>Email: {partner.email}</p>
        </section>
    );
}