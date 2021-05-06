package kr.scalar.api.user.service;

import kr.scalar.api.security.domain.SecurityProvider;
import kr.scalar.api.security.exception.SecurityRuntimeException;
import kr.scalar.api.user.domain.Role;
import kr.scalar.api.user.domain.UserDto;
import kr.scalar.api.user.domain.UserVo;
import kr.scalar.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import javax.naming.AuthenticationException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProvider provider;
    private final AuthenticationManager manager;
    private final ModelMapper modelMapper;
    @Override
    public String signup(UserVo user) {
        if(!userRepository.existsByUsername(user.getUsername())){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            List<Role> list = new ArrayList<>();
            list.add(Role.USER);
            user.setRoles(list);
            userRepository.save(user);
            return provider.createToken(user.getUsername(), user.getRoles());
        }else{
            throw new SecurityRuntimeException("Username is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }

    }
    @Override
    public UserDto signin(UserVo user) {
        try{
            UserVo loginedUser = userRepository.signin(user.getUsername(), user.getPassword());
            UserDto userDto = modelMapper.map(user,UserDto.class);
            String token = provider.createToken(user.getUsername(), userRepository.findByUsername(user.getUsername()).getRoles());
            log.info(" :::::::::: ISSUED TOKEN :::::::::: ",token);
            userDto.setToken(token);
            return userDto;
        }catch (Exception e){
            throw new SecurityRuntimeException("Invalid Username / Password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @Override
    public List<UserVo> findAll() {
        // repo.findAll().stream().map(user -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList())
        return userRepository.findAll();
    }
}
