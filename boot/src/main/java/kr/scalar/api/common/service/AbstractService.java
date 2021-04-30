package kr.scalar.api.common.service;

import kr.scalar.api.news.domain.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> {
    public abstract Long save(T t);
    public abstract Optional<T> findById(long id);
    public abstract Page<T> findAll(Pageable pageable);
    public abstract Long count();
    public abstract Optional<T> getOne(long id);
    public abstract Long delete(T t);
    public abstract Boolean existsById(long id);
}
