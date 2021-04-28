package kr.scalar.api.stream;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class StreamUtil {
    public List<String> arrayToList(String[] arr){
        return Arrays.asList(arr).stream().sorted().collect(Collectors.toList());
    }
    public Stream<Student> customCompareTo(Map<String, Object> map) {
        Student student = (Student)map.get("student");
        String prop = (String)map.get("prop");
        boolean asc = (boolean)map.get("asc");
        switch (prop){
            case "name":

                return null;
            case "username":

                return null;
            case "grade":

                return null;
            case "score":

                return null;
        }
        return null;

    }
}
