import java.util.stream.*;

class ArmstrongNumbers {

	IntStream getDigits(String n) {
		return n.chars()
			.map(c -> Character.getNumericValue(c));
	}

	boolean isArmstrongNumber(int n) {
		String str = Integer.toString(n);
		double pow = str.length();
		return n == str
			.chars()
			.map(c -> Character.getNumericValue(c))
			.map(d -> (int)Math.pow((double)d, pow))
			.sum();
	}

}
