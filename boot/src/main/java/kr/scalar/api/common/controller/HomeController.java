package kr.scalar.api.common.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {
    @GetMapping("/")
    public String home(){
        return new SimpleDateFormat("MM-dd HH:mm").format(new Date());
    }
}
