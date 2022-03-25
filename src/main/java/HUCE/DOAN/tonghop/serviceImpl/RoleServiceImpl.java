package HUCE.DOAN.tonghop.serviceImpl;

import HUCE.DOAN.tonghop.entity.Role;
import HUCE.DOAN.tonghop.entity.User;
import com.HUCE.CNPM.model.RoleReq;
import com.HUCE.CNPM.model.RoleRes;

import java.util.List;

public interface RoleServiceImpl {
    RoleRes post(RoleReq roleReq);
    Role SaveRole(Role role );
    void addRoleToUser(String username , String roleName );

    User saveUser(User user);
    User getUser(String userName);
    List<User> getUsers();

}
