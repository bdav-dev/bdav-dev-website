export default class Fraction {
    private whole: number;
    private numerator: number;
    private denominator: number;

    public constructor(numerator: number, denominator: number = 1) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.whole = 0;
        this.reduce();
    }

    private reduce() {
        const greatestCommonDivisor = this.getGreatestCommonDivisor(this.numerator, this.denominator);
        this.numerator /= greatestCommonDivisor;
        this.denominator /= greatestCommonDivisor;

        const sign = Math.sign(this.numerator);
        const absoluteNumerator = Math.abs(this.numerator);
        const wholePart = Math.floor(absoluteNumerator / this.denominator);

        this.whole += sign * wholePart;
        this.numerator = absoluteNumerator % this.denominator;
    }

    private getGreatestCommonDivisor(a: number, b: number): number {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    public asDecimal() {
        return this.whole + this.numerator / this.denominator;
    }

    public getWhole(): number {
        return this.whole;
    }

    public getNumerator(): number {
        return this.numerator;
    }

    public getDenominator(): number {
        return this.denominator;
    }

    public toString() {
        if (this.whole === 0) {
            return `${this.numerator}/${this.denominator}`;
        } else if (this.numerator === 0) {
            return `${this.whole}`;
        } else {
            return `${this.whole} ${this.numerator}/${this.denominator}`;
        }
    }
}
