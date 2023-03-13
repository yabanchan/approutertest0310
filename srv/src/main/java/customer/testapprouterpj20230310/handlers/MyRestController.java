package customer.testapprouterpj20230310.handlers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class MyRestController {
    @GetMapping("/hello")
    public ResponseEntity<String> hello(){
        return new ResponseEntity<String>("Hello World", HttpStatus.OK);
    }
}