package com.quizzapp.quiz.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.quizzapp.quiz.entity.User;


@RepositoryRestResource(path="user")
@CrossOrigin("http://localhost:4200/")
public interface UserRepository extends JpaRepository<User,String>{
	
	// public User findByUserName(String userName);
	public List<User> findByUserNameContainsIgnoreCase(String userName);
//	public List<User> findByRole(String role);
	
	


}
