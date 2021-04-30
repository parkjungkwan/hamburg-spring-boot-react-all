package kr.scalar.api.news.service;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.domain.News;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NewsService {
    List<News> newsFindAll();
    //List<HomeNews> homeNewsFindAll();
    void crawlingHome();
    Long saveAll(Crawler crawler) throws IOException;
    Optional<News> findByNewsNo(String newsNo);
    void optionalInit(String newsNo);
//    public ClickedNews crawlingOne(String newsNo);
}