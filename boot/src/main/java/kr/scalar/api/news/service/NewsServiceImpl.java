package kr.scalar.api.news.service;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.common.service.AbstractService;
import kr.scalar.api.common.service.CrawlerService;
import kr.scalar.api.common.service.CrawlerServiceImpl;
import kr.scalar.api.news.domain.News;
import kr.scalar.api.news.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Log
@Lazy
@Service
@RequiredArgsConstructor
public class NewsServiceImpl implements NewsService {
    private final NewsRepository repo;


    @Override
    public void optionalInit(String newsNo) {

    }

    @Override
    public Long saveAll(Crawler crawler) throws IOException {
        Document document = CrawlerServiceImpl.connectUrl(crawler.getUrl());
        Elements elements = document.select(crawler.getCssQuery());

        News news = null;
        for (int i = 0; i < elements.size(); i++) {
            news = new News();

            news.setAddress(elements.get(i).attr("href"));
            news.setCategory(crawler.getCategory());
            news.setTitle(elements.get(i).text());
            repo.save(news);
        }
        return (repo.count() > 0) ? 0L : 1L;
    }

    @Override
    public Page<News> retrievePosts(Pageable pageable) {
        return null;
    }

}