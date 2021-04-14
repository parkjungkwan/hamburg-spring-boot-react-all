package kr.scalar.api.board;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;

@Data @Component
public class BoardDto {
    private long boardId;
    private String title;

}
