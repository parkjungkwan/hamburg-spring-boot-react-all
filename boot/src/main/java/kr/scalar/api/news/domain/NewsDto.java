package kr.scalar.api.news.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
@Component @Data
public class NewsDto {
    private Long newsId;

    private String newsNo;

    private String category;

    private String title;

    private String address;

}
