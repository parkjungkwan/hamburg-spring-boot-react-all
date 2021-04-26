package kr.scalar.api.user.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="users")
public class UserVo {
    @Id
    @Column(name="user_id")Long userId;
}
