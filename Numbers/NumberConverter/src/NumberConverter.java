import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class NumberConverter {
    public static void main(String[] args) {

        try {
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Choose your option as below:");
            System.out.println("type \"1\" to choose Decemial to Binary");
            System.out.println("type \"2\" to choose Binary to Decemial");

            String option = reader.readLine();

            while (!checkInputLegal(option)) {
                System.out.println("your input is illegal, please choose it again");
                option = reader.readLine();
            }

            if (option.equalsIgnoreCase("1")) {
                DecimalToBinaryConverterValidation(reader);
            } else {
                BinaryToDecimalConverterValidation(reader);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

    private static boolean checkInputLegal(String str) {
        if (str.equalsIgnoreCase("1") || str.equalsIgnoreCase("2")) {
            return true;
        }
        return false;
    }

    private static void DecimalToBinaryConverterValidation(BufferedReader reader) {
        try {
            System.out.print("Type your decimal number here: ");
            String number = reader.readLine();
            try {
                Long num = Long.valueOf(number);
                System.out.print("Your answer is: " + DecimalToBinaryConverter(num));
            } catch (Exception e) {
                System.out.println("your input is illegal, please do it again");
                DecimalToBinaryConverterValidation(reader);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void BinaryToDecimalConverterValidation(BufferedReader reader) {
        try {
            System.out.print("Type your Binary number here: ");
            String number = reader.readLine();
            while(!checkBinaryNumber(number)){
                System.out.println("your input is illegal, please do it again");
                System.out.print("Type your Binary number here: ");
                number = reader.readLine();
            }
            System.out.print("Your answer is: " + BinaryToDecimalConverter(number));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String DecimalToBinaryConverter(Long num) {
        StringBuffer stringBuffer = new StringBuffer();
        Stack<Long> stack = new Stack<>();
        while (num != 0) {
            long divide = num % 2;
            stack.push(divide);
            num = num / 2;
        }
        while (!stack.isEmpty()) {
            stringBuffer.append(stack.pop());
        }
        return stringBuffer.toString();
    }

    private static boolean checkBinaryNumber(String str){
        char[] charArr = str.trim().toCharArray();
        for (int i = 0; i < charArr.length; i++) {
            if (charArr[i] != '1' && charArr[i] != '0') {
                return false;
            }
        }
        return true;
    }

    private static long BinaryToDecimalConverter(String number){
        long num = 0;
        char[] charArr = number.toCharArray();
        for (int i = 0; i < charArr.length; i++) {
            num = num +  Integer.valueOf(new String(charArr[i] + "")) * pow(2, charArr.length - 1-i);
        }
        return num;
    }

    private static Long pow(long a, long b){
        long num = 1;
        while(b!=0){
            num = num * a;
            b--;
        }
        return num;
    }
}
