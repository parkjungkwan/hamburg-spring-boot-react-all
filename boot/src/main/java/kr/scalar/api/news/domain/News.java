package kr.scalar.api.news.domain;

import lombok.Builder;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id") private Long newsId;

    @Column(length = 20) private String category;

    @Column(length = 512) private String title;

    @Column(length = 1024) private String address;

    @Builder
    public News(Long newsId, String category,
                String title, String address) {
        this.newsId = newsId;
        this.address = address;
        this.category = category;
        this.title = title;
    }
}