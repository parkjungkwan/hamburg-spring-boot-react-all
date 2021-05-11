package kr.scalar.api.user.service;

import kr.scalar.api.user.domain.UserVo;
import kr.scalar.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository repository;

    @Override @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserVo> user = Optional.ofNullable(repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username : " + username)));

        return UserDetailsImpl.build(user.get());
    }
}
