package HUCE.DOAN.tonghop.mapper;


import HUCE.DOAN.tonghop.entity.User;
import HUCE.DOAN.tonghop.repostory.RoleRepo;
import HUCE.DOAN.tonghop.repostory.UserRepo;
import com.HUCE.CNPM.model.AccountReq;
import com.HUCE.CNPM.model.AccountRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@Component
public class UserMapper {
    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;

    public User toUserEntityFromUser(AccountReq req){

        User user = new User();
        user.setName(req.getName());
        user.setUserName(req.getUsername());
        user.setPassWord(req.getPassword());
//        List<Role> roles = new ArrayList<>();
//        for ( long roleId : req.getRoleIds() ) {
//            Role role = roleRepo.getById(roleId);
//            roles.add(role);
//        }
//        user.setRoles(roles);
        return user;
    }

    public AccountRes toUserFromEntity(User user){
        AccountRes accountRes = new AccountRes();
        accountRes.setId(user.getId());
        accountRes.setName(user.getName());
        accountRes.setUsername(user.getUserName());
        //List<Role> roles = roleRepo.
        //accountRes.setUserRoles();
        return accountRes;
    }
}
