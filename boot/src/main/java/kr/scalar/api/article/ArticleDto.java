package kr.scalar.api.article;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
@Data @Component
public class ArticleDto {
    @Column(name="article_id") private long articleId;
    @Column(name="writer") private String writer;
    @Column(name="email") private String email;
    @Column(name="subject") private String subject;
    @Column(name="content") private String content;
    @Column(name="rdate") private String rdate;
}
