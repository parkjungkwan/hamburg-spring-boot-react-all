package kr.scalar.api.news.service;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.domain.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;

public interface NewsService {
    public void optionalInit(String newsNo);
    public Long saveAll(Crawler crawler) throws IOException;
    public Page<News> retrievePosts(Pageable pageable);
}