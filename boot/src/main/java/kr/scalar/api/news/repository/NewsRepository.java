package kr.scalar.api.news.repository;

import kr.scalar.api.news.domain.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    News findByNewsNo(String newsNo);
}
