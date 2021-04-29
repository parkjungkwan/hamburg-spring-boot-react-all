package kr.scalar.api.review.service;

import kr.scalar.api.common.service.AbstractService;
import kr.scalar.api.review.domain.Review;
import kr.scalar.api.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service @RequiredArgsConstructor
public class ReviewServiceImpl extends AbstractService<Review> implements ReviewService {
    private final ReviewRepository repository;
    @Override
    public Long save(Review review) {
        return (repository.save(review) != null) ? 1L : 0L;
    }

    @Override
    public Optional<Review> findById(long id) {
        return Optional.empty();
    }

    @Override
    public List<Review> findAll() {
        return null;
    }

    @Override
    public Long count() {
        return null;
    }

    @Override
    public Optional<Review> getOne(long id) {
        return Optional.empty();
    }

    @Override
    public Long delete(Review review) {
        return null;
    }

    @Override
    public Boolean existsById(long id) {
        return null;
    }
}
