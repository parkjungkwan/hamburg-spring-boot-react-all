package kr.scalar.api.exhibition.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data @Component
public class ExhibitionDto {
    private long boardId;
    private String title;

}
