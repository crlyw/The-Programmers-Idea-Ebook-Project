/**
 * Created by yaweili on 3/8/17.
 */
public class Fraction implements FractionMethod {

    private int numerator;

    private int denominator;

    private int gcd(int x, int y) {
        if(y==0){
            return x;
        }else{
            return gcd(y, x%y);
        }
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
        int gcd = gcd(n,d);
        return new Fraction(n/gcd, d/gcd);
    }

    public Fraction subtract(Fraction fraction) {
        int n = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        int d = this.denominator * fraction.denominator;
        int gcd = gcd(n,d);
        return new Fraction(n/gcd, d/gcd);
    }

    public Fraction multiply(Fraction fraction) {
        int n = this.numerator * fraction.numerator;
        int d = this.denominator * fraction.denominator;
        int gcd = gcd(n,d);
        return new Fraction(n/gcd, d/gcd);
    }

    public Fraction divide(Fraction fraction) {
        int n = this.numerator * fraction.denominator;
        int d = this.denominator * fraction.numerator;
        int gcd = gcd(n,d);
        return new Fraction(n/gcd, d/gcd);
    }

    public String toString() {
        if(this.denominator!=1){
            return this.numerator + "/" + this.denominator;
        }else{
            return String.valueOf(this.numerator);
        }
    }
}
