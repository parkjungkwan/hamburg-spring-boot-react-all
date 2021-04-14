package kr.scalar.api.address;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class AddressDto {
    private long seq;
    private String name;
    private String addr;
    private String rdate;
}
