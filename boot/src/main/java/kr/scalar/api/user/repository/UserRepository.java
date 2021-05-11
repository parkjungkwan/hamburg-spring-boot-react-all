package kr.scalar.api.user.repository;

import kr.scalar.api.user.domain.UserVo;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserVo, Long> {
    boolean existsByUsername(String username);
    Optional<UserVo> findByUsername(String username);
    @Query("select u from UserVo u where u.username = :username and u.password = :password ")
    UserVo signin(@Param("username") String username,@Param("password") String password);

}
