package kr.scalar.api.news.controller;

import kr.scalar.api.common.domain.Crawler;
import kr.scalar.api.news.service.NewsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Log
@RestController @RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController {
    private final NewsServiceImpl service;

    @PostMapping("/scrap")
    public ResponseEntity<Long> crawling(@RequestBody Crawler crawler)throws IOException {
        System.out.print("****************** 카테고리 : "+crawler.toString());
        return ResponseEntity.ok(service.saveAll(crawler));
    }

}
