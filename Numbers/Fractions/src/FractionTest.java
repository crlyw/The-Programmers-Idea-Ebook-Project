/**
 * Created by yaweili on 3/8/17.
 */
public class FractionTest {

    public static void testFractionAdd(){
        System.out.println("Test Fraction Add: ");
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,11);
        System.out.println(fraction1.add(fraction2));
    }

    public static void testFractionSubtract(){

    }

    public static void testFractionMultiply(){

    }

    public static void testFractionDivide(){

    }

    public static void main(String[] args) {
        Fraction fraction1 = new Fraction(3, 4);
        Fraction fraction2 = new Fraction(2,11);
        System.out.println(fraction1.add(fraction2));
    }
}
