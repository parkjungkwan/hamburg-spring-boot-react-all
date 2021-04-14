package kr.scalar.api.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="users")
public class UserVo {
    @Id @Column(name="user_id") private long userId;
    @Column(name="username") private String username;
    @Column(name="password") private String password;
    @Column(name="name") private String name;
    @Column(name="birth") private String birth;
    @Column(name="email") private String email;
}
