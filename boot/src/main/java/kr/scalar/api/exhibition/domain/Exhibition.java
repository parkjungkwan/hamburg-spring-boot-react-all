package kr.scalar.api.exhibition.domain;

import javax.persistence.*;

@Entity
@Table(name = "exhibitions")
public class Exhibition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exhibition_id") private long exhibitionId;
}