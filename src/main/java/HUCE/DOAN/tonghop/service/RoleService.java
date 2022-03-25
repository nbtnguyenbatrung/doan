package HUCE.DOAN.tonghop.service;


import HUCE.DOAN.tonghop.entity.Role;
import HUCE.DOAN.tonghop.entity.User;
import HUCE.DOAN.tonghop.mapper.RoleMapper;
import HUCE.DOAN.tonghop.repostory.RoleRepo;
import HUCE.DOAN.tonghop.repostory.UserRepo;
import HUCE.DOAN.tonghop.serviceImpl.RoleServiceImpl;
import com.HUCE.CNPM.model.RoleReq;
import com.HUCE.CNPM.model.RoleRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class RoleService implements RoleServiceImpl, UserDetailsService {

    RoleMapper mapper;
    private final RoleRepo roleRepo;
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public RoleRes post(RoleReq roleReq) {
        Role role = mapper.toRoleEntityFromUser(roleReq);
        role = roleRepo.save(role);
        RoleRes roleRes = mapper.toRoleFromEntity(role);
        return roleRes;
    }

    @Override
    public Role SaveRole(Role role) {
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        User user = userRepo.findByUserName(username);
        Role role = roleRepo.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User saveUser(User user) {
        user.setPassWord(passwordEncoder.encode(user.getPassWord()));
        return userRepo.save(user);
    }

    @Override
    public User getUser(String userName) {
        return userRepo.findByUserName(userName);
    }

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUserName(username);
        if (user == null ){
            throw new UsernameNotFoundException("User not found in database");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUserName() , user.getPassWord() , authorities);
    }
}
