package kr.scalar.api.news.service;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.domain.News;
import org.jsoup.nodes.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NewsService {
    List<News> newsFindAll();
    //List<HomeNews> homeNewsFindAll();
    void crawlingHome();
    List<News> saveAll(Crawler crawler) throws IOException;
    Page<News> retrieve(final Pageable pageable);
    void optionalInit(String newsNo);
//    public ClickedNews crawlingOne(String newsNo);
}