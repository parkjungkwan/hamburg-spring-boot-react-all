package kr.scalar.api.exhibition.domain;

import kr.scalar.api.hall.domain.Hall;

import javax.persistence.*;

@Entity
@Table(name = "exhibitions")
public class Exhibition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exhibition_id") private long exhibitionId;

    @ManyToOne
    @JoinColumn("hall_id")
    Hall hall;
}