package kr.scalar.api.news.service;

import kr.scalar.api.news.domain.News;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface NewsService {
    Document connectUrl(String url) throws IOException;
    List<News> newsFindAll();
    //List<HomeNews> homeNewsFindAll();
    void crawlingHome();
    Long saveAll(String category) throws IOException;
    Optional<News> findByNewsNo(String newsNo);
    void optionalInit(String newsNo);
//    public ClickedNews crawlingOne(String newsNo);
}