package kr.scalar.api.user;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Override
    public void test() {
        System.out.println("1");
    }
}
