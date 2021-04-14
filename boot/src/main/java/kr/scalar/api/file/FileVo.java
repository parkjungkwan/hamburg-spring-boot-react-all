package kr.scalar.api.file;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="files")
public class FileVo {
    @Id
    @Column(name="file_id") private long fileId;
    @Column(name="save_fname") private String saveFname;
    @Column(name="origin_fname") private String originFname;
    @Column(name="fsize") private long fsize;

}
