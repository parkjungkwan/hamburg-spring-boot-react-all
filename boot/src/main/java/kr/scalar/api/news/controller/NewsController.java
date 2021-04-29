package kr.scalar.api.news.controller;

import kr.scalar.api.news.domain.News;
import kr.scalar.api.news.service.NewsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@Log
@RestController @RequiredArgsConstructor
@RequestMapping("/news")
public class NewsController {
    private final NewsServiceImpl service;

    @GetMapping("/{category}/scrap")
    public ResponseEntity<Long> crawling(@PathVariable String category)throws IOException {
        System.out.print("****************** 카테고리 : "+category);
        return ResponseEntity.ok(service.saveAll(category));
    }

}
