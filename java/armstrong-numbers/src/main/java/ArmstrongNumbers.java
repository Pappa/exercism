import java.util.stream.*;

class ArmstrongNumbers {

	int getSumOfPowers(String n, double pow) {
		return n.chars()
			.map(c -> Character.getNumericValue(c))
			.map(d -> (int)Math.pow((double)d, pow))
			.sum();
	}

	boolean isArmstrongNumber(int n) {
		String str = Integer.toString(n);
		double pow = str.length();
		return n == this.getSumOfPowers(str, pow);
	}

}
