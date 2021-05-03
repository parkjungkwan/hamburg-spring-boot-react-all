package kr.scalar.api.news.domain;

import lombok.Data;
import org.springframework.stereotype.Component;


@Component
@Data
public class NewsDto {
    private Long newsId;
    private String category;
    private String title;
    private String address;

}