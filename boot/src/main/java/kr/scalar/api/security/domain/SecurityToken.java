package kr.scalar.api.security.domain;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SecurityToken {
    private final String token;
    private final String key;
    private int tokenExpirationMsec = 1800000; // 만료시간 30분
    private static final String AUTHORITIES_KEY = "role";

    public String createToken(){
        return null;
    }
}
