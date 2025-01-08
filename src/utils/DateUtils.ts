export function parseDMY(dateInDmyFormat: string) {
    const [day, month, year] = dateInDmyFormat.split('.');

    return new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
    );
}

export function toDmyString(date: Date) {
    return (
        new Intl.DateTimeFormat(
            'de-DE', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }
        )
            .format(date)
    );
}

export function formatDmyString(dateInDmyFormat: string) {
    return toDmyString(parseDMY(dateInDmyFormat));
}
