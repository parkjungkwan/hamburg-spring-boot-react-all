package kr.scalar.api.user.controller;

import kr.scalar.api.news.domain.News;
import kr.scalar.api.user.domain.UserVo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @RequestMapping("/users")
public class UserController {
    @PostMapping("")
    public ResponseEntity<Long> join(@RequestBody UserVo user){
        return ResponseEntity.ok(null);
    }
    @GetMapping("")
    public ResponseEntity<List<UserVo>> fetch(@RequestBody UserVo user){
        return ResponseEntity.ok(null);
    }
    @PutMapping("")
    public ResponseEntity<Long> update(@RequestBody UserVo user){
        return ResponseEntity.ok(null);
    }
    @DeleteMapping("")
    public ResponseEntity<Long> delete(@RequestBody UserVo user){
        return ResponseEntity.ok(null);
    }
}
