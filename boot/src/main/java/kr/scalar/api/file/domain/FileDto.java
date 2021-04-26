package kr.scalar.api.file.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class FileDto {
    private long seqf;
    private String sfname;
    private String ofname;
    private long fsize;
    private long seq;
}
