/**
 * Created by yaweili on 3/8/17.
 */
public class Fraction implements FractionMethod {

    private int numerator;

    private int denominator;

    private int gcd(int x, int y) {
        return 0;
    }

    public Fraction(int n) {
        this.numerator = n;
    }

    public Fraction(int n, int d) {
        this.numerator = n;
        this.denominator = d;
    }

    public Fraction add(Fraction fraction) {
        int n = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        int d = this.denominator * fraction.denominator;
        return new Fraction(n, d);
    }

    public Fraction subtract(Fraction fraction) {
        return null;
    }

    public Fraction multiply(Fraction fraction) {
        return null;
    }

    public Fraction divide(Fraction fraction) {
        return null;
    }

    @Override
    public String toString() {
        if(this.denominator!=1){
            return this.numerator + "/" + this.denominator;
        }else{
            return String.valueOf(this.numerator);
        }
    }
}
