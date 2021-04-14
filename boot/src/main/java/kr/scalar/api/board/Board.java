package kr.scalar.api.board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name="boards")
public class Board {
    @Id
    @Column(name="board_id") private long boardId;
    @Column(name="title") private String title;

}
