package HUCE.DOAN.tonghop.serviceImpl;

import HUCE.DOAN.tonghop.entity.User;
import com.HUCE.CNPM.model.AccountReq;
import com.HUCE.CNPM.model.AccountRes;

import java.util.List;

public interface UserServiceImpl {
    AccountRes post(AccountReq accountReq);
    List<AccountRes> getAllAccount();
    AccountRes getAccount(String userName);
    void postRoleToAccount(long AccountId , long RoleId);

    User saveUser(User user);
    User getUser(String userName);
    List<User> getUsers();
}
