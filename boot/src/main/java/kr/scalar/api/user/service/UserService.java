package kr.scalar.api.user.service;

import kr.scalar.api.user.domain.UserDto;

public interface UserService {
    long signup(UserDto user);
}
