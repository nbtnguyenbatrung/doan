package HUCE.DOAN.tonghop.repostory;


import HUCE.DOAN.tonghop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByUserName(String userName);
}
