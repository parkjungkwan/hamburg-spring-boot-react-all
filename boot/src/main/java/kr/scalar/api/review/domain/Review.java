package kr.scalar.api.review.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="reviews")
public class Review {
    @Id
    @Column(name="review_id") private long reviewId;


}
