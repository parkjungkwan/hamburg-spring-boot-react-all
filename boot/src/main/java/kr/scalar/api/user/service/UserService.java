package kr.scalar.api.user.service;

import kr.scalar.api.user.domain.UserDto;
import kr.scalar.api.user.domain.UserVo;

import java.util.List;

public interface UserService {
    String signup(UserVo user);
    UserDto signin(UserVo user);
    List<UserVo> findAll();
}
