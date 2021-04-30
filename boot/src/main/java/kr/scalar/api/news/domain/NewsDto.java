package kr.scalar.api.news.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
@Component @Getter
@Builder(access = AccessLevel.PRIVATE)
public class NewsDto {
    private Long newsId;
    private String category;
    private String title;
    private String address;

    public static NewsDto of(News news){
        return NewsDto.builder()
                .newsId(news.getNewsId())
                .category(news.getCategory())
                .title(news.getTitle())
                .address(news.getAddress())
                .build();
        };



}
