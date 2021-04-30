package kr.scalar.api.news.controller;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.domain.News;
import kr.scalar.api.news.service.NewsServiceImpl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@Log
@RestController @RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController {
    private final NewsServiceImpl service;

    @PostMapping("/scrap")
    public ResponseEntity<List<News>> crawling(@RequestBody Crawler crawler)throws IOException {
        System.out.print("****************** 카테고리 : "+crawler.toString());
        return ResponseEntity.ok(service.saveAll(crawler));
    }
    @PostMapping("")
    public ResponseEntity<Long> post(@RequestBody News news){
        return ResponseEntity.ok(null);
    }
    @GetMapping("")
    public ResponseEntity<Page<News>> findAll(final Pageable pageable){
        return ResponseEntity.ok(service.findAll(pageable));
    }
    @PutMapping("")
    public ResponseEntity<Long> update(@RequestBody News news){
        return ResponseEntity.ok(null);
    }
    @DeleteMapping("")
    public ResponseEntity<Long> delete(@RequestBody News news){
        return ResponseEntity.ok(null);
    }

}
