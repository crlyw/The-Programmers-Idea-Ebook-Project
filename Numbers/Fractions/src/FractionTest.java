/**
 * Created by yaweili on 3/8/17.
 */
public class FractionTest {

    public static void testFractionAdd(){
        System.out.println("Test Fraction Add: ");
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,4);
        System.out.print(fraction1 + " + " + fraction2 + " = " + fraction1.add(fraction2));
        System.out.println();
    }

    public static void testFractionSubtract(){
        System.out.println("Test Fraction Substract: ");
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,4);
        System.out.print(fraction1 + " - " + fraction2 + " = " + fraction1.subtract(fraction2));
        System.out.println();
    }

    public static void testFractionMultiply(){
        System.out.println("Test Fraction Multiply: ");
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,4);
        System.out.print(fraction1 + " * " + fraction2 + " = " + fraction1.multiply(fraction2));
        System.out.println();
    }

    public static void testFractionDivide(){
        System.out.println("Test Fraction Divide: ");
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,4);
        System.out.print(fraction1 + " / " + fraction2 + " = " + fraction1.divide(fraction2));
        System.out.println();
    }

    public static void main(String[] args) {
        testFractionAdd();
        testFractionSubtract();
        testFractionMultiply();
        testFractionDivide();
    }
}
