package kr.scalar.api.common.service;

import kr.scalar.api.common.domain.Crawler;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.util.List;

public interface CrawlerService {

    List<?> scrapBugs(Crawler crawler) throws IOException;
}
