package kr.scalar.api.file.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="files")
public class FileVo {
    @Id
    @Column(name="file_id") private long fileId;


}
