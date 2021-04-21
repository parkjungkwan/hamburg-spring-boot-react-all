package kr.scalar.api.user;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
@Data @Component
public class UserDto {
    private long userId;
    private String username;
    private String password;
    private String name;
    private String birth;
    private String email;
    private int number;

}
