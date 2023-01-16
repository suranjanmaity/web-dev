package codingQuestions.pattern;
/**
 * print this numeric pattern
 * 0
 * 909
 * 89098
 * 7890987
 * 678909876
 * 56789098765
 */
public class numericStar {
    public static void main(String[] args) {

        for (int c = 0,temp=10; c < 6; c++,temp-=1) {

            // for first half
            for (int r = 0; r < c; r++) {
                System.out.print(temp+r);
            }

            // for that blody zero in middle
            System.out.print("0");

            // for second half
            for (int r = 0; r < c; r++) {
                System.out.print(9-r);
            }
            System.out.println();
        }
    }
}
