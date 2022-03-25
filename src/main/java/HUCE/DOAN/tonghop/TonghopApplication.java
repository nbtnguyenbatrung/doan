package HUCE.DOAN.tonghop;

import HUCE.DOAN.tonghop.entity.Role;
import HUCE.DOAN.tonghop.entity.User;
import HUCE.DOAN.tonghop.service.RoleService;
import HUCE.DOAN.tonghop.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class TonghopApplication {

	public static void main(String[] args) {
		SpringApplication.run(TonghopApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	CommandLineRunner run(RoleService roleService){
//		return args -> {
//			roleService.SaveRole(new Role(null , "ROLE_ADMIN" , "admin"));
//			roleService.SaveRole(new Role(null , "ROLE_USER" , "user"));
//
//			roleService.saveUser(new User(null , "batrung" , "admin" , "admin" , new ArrayList<>()));
//
//			roleService.addRoleToUser("admin" , "ROLE_ADMIN");
//			roleService.addRoleToUser("admin" , "ROLE_USER");
//		};
//	}

}
