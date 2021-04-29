package kr.scalar.api.common.service;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> {
    public abstract Long save(T t);
    public abstract Optional<T> findById(long id);
    public abstract List<T> findAll();
    public abstract Long count();
    public abstract Optional<T> getOne(long id);
    public abstract Long delete(T t);
    public abstract Boolean existsById(long id);
}
