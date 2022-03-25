package HUCE.DOAN.tonghop.mapper;

import HUCE.DOAN.tonghop.entity.Role;
import HUCE.DOAN.tonghop.repostory.RoleRepo;
import com.HUCE.CNPM.model.RoleReq;
import com.HUCE.CNPM.model.RoleRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoleMapper {

    @Autowired
    RoleRepo roleRepo;

    public Role toRoleEntityFromUser(RoleReq req){

        Role role = new Role();
        role.setName(req.getName());
        role.setDescription(req.getDescription());
        return role;
    }

    public RoleRes toRoleFromEntity(Role role){
        RoleRes roleRes = new RoleRes();
        roleRes.setId(role.getId());
        roleRes.setName(role.getName());
        roleRes.setName(role.getName());
        roleRes.setDescription(role.getDescription());
        return roleRes;
    }
}
