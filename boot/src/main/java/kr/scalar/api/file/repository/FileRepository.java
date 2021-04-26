package kr.scalar.api.file.repository;

import kr.scalar.api.file.domain.FileVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<FileVo, Long> {
}
