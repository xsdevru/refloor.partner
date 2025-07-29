export function Header({ partnerName }) {
    return (
        <header className="p-4 border-b border-gray-300 dark:border-gray-700 font-semibold text-xl">
            <small>Кабинет партнёра</small> <br />
            {partnerName}
        </header>
    );
}
