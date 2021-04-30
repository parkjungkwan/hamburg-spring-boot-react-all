package kr.scalar.api.hall.domain;

import kr.scalar.api.exhibition.domain.Exhibition;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "halls")
public class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hall_id") private long hallId;


    @OneToMany(mappedBy = "hall")
    List<Exhibition> exhibitions = new ArrayList<>();
}