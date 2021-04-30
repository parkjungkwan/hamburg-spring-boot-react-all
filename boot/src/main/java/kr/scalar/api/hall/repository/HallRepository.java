package kr.scalar.api.hall.repository;

import kr.scalar.api.hall.domain.Hall;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HallRepository extends JpaRepository<Hall, Long> {
}
