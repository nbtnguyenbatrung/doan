package HUCE.DOAN.tonghop.api;

import HUCE.DOAN.tonghop.entity.Role;
import HUCE.DOAN.tonghop.entity.User;
import HUCE.DOAN.tonghop.service.RoleService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/huce")
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @PostMapping("/roles")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        return ResponseEntity.ok().body(roleService.SaveRole(role));
    }

    @PostMapping("/role/add-to-user")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        roleService.addRoleToUser(form.getUserName(),form.getRoleName());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/refresh-token")
    public void refreshToken(HttpServletRequest request , HttpServletResponse response) throws IOException {
        String authorization = request.getHeader(AUTHORIZATION);

            if (authorization != null ){
                try {
                    String refresh_token = authorization ;
                    Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                    JWTVerifier verifier = JWT.require(algorithm).build();
                    DecodedJWT decodedJWT = verifier.verify(refresh_token);
                    String userName = decodedJWT.getSubject();
                    User user = roleService.getUser(userName);
                    String access_token = JWT.create()
                            .withSubject(user.getUserName())
                            .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
                            .withIssuer(request.getRequestURL().toString())
                            .withClaim("roles" , user.getRoles().stream().map(Role::getName).collect(Collectors.toList()))
                            .sign(algorithm);
                    Map<String , String > tokens = new HashMap<>();
                    tokens.put("access_token" , access_token);
                    tokens.put("refresh_token" , refresh_token);
                    response.setContentType("application/json");
                    new ObjectMapper().writeValue(response.getOutputStream() , tokens);
                }catch (Exception e){
                    response.setHeader("error" , e.getMessage());
                    response.setStatus(FORBIDDEN.value());
                    //response.sendError(FORBIDDEN.value());
                    Map<String , String > err = new HashMap<>();
                    err.put("error_messenge" , e.getMessage());
                    response.setContentType("application/json");
                    new ObjectMapper().writeValue(response.getOutputStream() , err);
                }
            }else{
                throw new RuntimeException("Refresh token is missing");
            }
    }

}

@Data
class RoleToUserForm{
    private String UserName;
    private String RoleName;
}

