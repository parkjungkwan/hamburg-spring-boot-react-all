package kr.scalar.api.stream;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static kr.scalar.api.stream.RefUtil.rangeBelowRandom;

class Student implements Comparable<Student>{
    private String name;
    private String username; // ID
    private int grade;
    private int score;

    public Student(String name, int grade, int score, String username) {
        this.name = name;
        this.grade = grade;
        this.score = score;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public int compareTo(Student o) {
        return o.getScore() - score;
    }

    @Override
    public String toString() {
        return "Student{" +
                "username='" + username + '\'' +
                ", name= '" + name + '\'' +
                ", grade= " + grade +
                ", score= " + score +
                '}';
    }
}


public class StreamMain {
    public static void main(String... args) {
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("메뉴: 0.EXIT 1.학년오름차순 2. 학년별 성적내림차순  3.전학년 성적내림차순 4.이름오름차순 5.ID오름차순");
            switch (scanner.nextInt()){
                case 0: return;
                case 1: ascGrade().forEach(System.out::println); break;
                case 2: descGrade().forEach(System.out::println); break;
                case 3: descScore().forEach(System.out::println); break;
                case 4: ascName().forEach(System.out::println); break;
                case 5: ascUsername().forEach(System.out::println); break;
            }
        }
    }
    public static Stream<Student> makeStream(){
        DummyGenerator dum = new DummyGenerator();
        return Stream.of(
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername()),
                        new Student(dum.makeName(), rangeBelowRandom.apply(1, 3), rangeBelowRandom.apply(0, 100), dum.makeUsername())
                );
    }

    public static Stream<Student> ascGrade(){
        return makeStream()
                .sorted(Comparator.comparing(Student::getGrade) // Comparator.comparing(String s)
                                    .thenComparing(Comparator.naturalOrder()));  // Comparable compareTo(Object o)
    }
    public static Stream<Student> descGrade(){
        return makeStream()
                .sorted(Comparator.comparing(Student::getGrade).reversed() // Comparator.comparing(String s)
                        .thenComparing(Comparator.naturalOrder()));  // Comparable compareTo(Object o)
    }

    public static Stream<Student> descScore(){
        return makeStream()
                .sorted(Comparator.naturalOrder()); // Comparable compareTo(Object o)
    }
    public static Stream<Student> ascName(){

        return makeStream()
                .sorted(Comparator.comparing(Student::getName)
                                    .thenComparing(Comparator.naturalOrder()));
    }
    public static Stream<Student> ascUsername(){

        return makeStream()
                .sorted(Comparator.comparing(Student::getUsername));
    }
}
