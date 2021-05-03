package kr.scalar.api.security.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
@RequiredArgsConstructor @Getter
public class SecurityRuntimeException extends RuntimeException{
   private static final long serialVersionUID = 1L;

   private final String message;
   private final HttpStatus httpStatus;

}
