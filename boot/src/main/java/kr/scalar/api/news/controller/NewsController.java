package kr.scalar.api.news.controller;

import kr.scalar.api.common.controller.AbstractController;
import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.domain.News;
import kr.scalar.api.news.service.NewsServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Log
@RestController
@RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController extends AbstractController<News> {
    private final NewsServiceImpl service;



    @GetMapping("/page")
    public ResponseEntity<Page<News>> retrievePosts(final Pageable pageable) {
        return ResponseEntity.ok(service.retrievePosts(pageable));
    }

    @PostMapping("")
    public ResponseEntity<List<News>> post(@RequestBody News news) throws IOException {

        return ResponseEntity.ok(null);
    }

    @GetMapping("")
    public ResponseEntity<News> fetch(@RequestBody News news) {

        return ResponseEntity.ok(null);
    }

    @PutMapping("")
    public ResponseEntity<Long> update(@RequestBody News news) {

        return ResponseEntity.ok(null);
    }

    @DeleteMapping("")
    public ResponseEntity<Long> delete(@RequestBody News news) {
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity<Boolean> existsById(long id) {
        return null;
    }


    @Override
    public ResponseEntity<Long> save(News news) {

        return null;
    }

    @Override
    public ResponseEntity<Optional<News>> findById(long id) {
        return null;
    }

    @Override
    public ResponseEntity<List<News>> findAll() {
        return null;
    }


    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<Optional<News>> getOne(long id) {
        return null;
    }

}
