package kr.scalar.api.recommend.domain;

import javax.persistence.*;

@Entity
@Table(name = "recommends")
public class Recommend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recommend_id") private long recommendId;
}