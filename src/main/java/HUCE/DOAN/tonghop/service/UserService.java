package HUCE.DOAN.tonghop.service;

import HUCE.DOAN.tonghop.entity.User;
import HUCE.DOAN.tonghop.mapper.UserMapper;
import HUCE.DOAN.tonghop.repostory.UserRepo;
import HUCE.DOAN.tonghop.serviceImpl.UserServiceImpl;
import com.HUCE.CNPM.model.AccountReq;
import com.HUCE.CNPM.model.AccountRes;
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
public class UserService implements UserServiceImpl {

    private final UserRepo userRepo;

    UserMapper mapper;

    @Override
    public AccountRes post(AccountReq accountReq) {
        User user = mapper.toUserEntityFromUser(accountReq);
//        user.setPassWord(passwordEncoder.encode(user.getPassWord()));
        user = userRepo.save(user);
        AccountRes accountRes = mapper.toUserFromEntity(user);
        return accountRes;
    }

    @Override
    public List<AccountRes> getAllAccount() {
        return null;
    }

    @Override
    public AccountRes getAccount(String userName) {
        return null;
    }

    @Override
    public void postRoleToAccount(long AccountId, long RoleId) {

    }

    @Override
    public User saveUser(User user) {
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
}
