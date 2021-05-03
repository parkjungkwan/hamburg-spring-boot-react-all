package kr.scalar.api.user.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;


@Entity @Table(name="users")
public class UserVo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)private Long userId;
    @Column(unique = true, nullable = false) private String username;
    @Size(min=8, message = "Minimum Password Length: 8 characters") private String password;
    @Column(unique = true, nullable = false) private String email;
    @Column(unique = true, nullable = false) private String name;
    @ElementCollection(fetch = FetchType.EAGER)
    List<Role> roles;
}
