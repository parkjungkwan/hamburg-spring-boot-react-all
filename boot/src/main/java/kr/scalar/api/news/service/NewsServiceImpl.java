package kr.scalar.api.news.service;

import kr.scalar.api.common.service.AbstractService;
import kr.scalar.api.news.domain.News;
import kr.scalar.api.news.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service @RequiredArgsConstructor
public class NewsServiceImpl extends AbstractService<News> implements NewsService {

    private final NewsRepository repository;

    @Override
    public Document connectUrl(String url) throws Exception {
        return null;
    }

    @Override
    public List<News> newsFindAll() {
        return null;
    }

    @Override
    public void crawlingHome() throws Exception {

    }

    @Override
    public void mainCrawler(String category) throws Exception {

    }

    @Override
    public void daumNews(Elements elements, String category) {

    }

    @Override
    public Optional<News> findByNewsNo(String newsNo) {
        return Optional.ofNullable(repository.findByNewsNo(newsNo));
    }

    @Override
    public void optionalInit(String newsNo) {
        Optional<String> optVal = Optional.empty(); // Optional Initializer
    }

    @Override
    public Long save(News news) {
        return (repository.save(news) != null) ? 1L : 0L;
    }

    @Override
    public Optional<News> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public List<News> findAll() {
        return repository.findAll();
    }

    @Override
    public Long count() {
        return repository.count();
    }

    @Override
    public Optional<News> getOne(long id) {
        return Optional.of(repository.getOne(id));
    }

    @Override
    public Long delete(News news) {
        repository.delete(news);
        return (findById(news.getNewsId()).orElse(null) == null) ? 1L : 0L;
    }

    @Override
    public Boolean existsById(long id) {
        return repository.existsById(id);
    }
}
