class Twofer {
    String twofer(String name) {
        String who = (name != null) ? name : "you";
        return String.format("One for %s, one for me.", who);
    }
}
