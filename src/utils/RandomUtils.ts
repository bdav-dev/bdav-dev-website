
export function chooseRandom<T>(array: T[]): T {
    return array.at(randomInteger(array.length))!;
}

export function randomInteger(upperBoundExclusive: number) {
    return Math.floor(Math.random() * upperBoundExclusive);
}
