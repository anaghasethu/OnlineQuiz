package com.quizzapp.quiz.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.quizzapp.quiz.entity.Result;
import com.quizzapp.quiz.entity.User;

@RepositoryRestResource(path="result")
@CrossOrigin("http://localhost:4200/")
public interface ResultRepository extends JpaRepository<Result , Integer>{
	
	public List<Result> findByUserIDIgnoreCase(String userID);
	
	//public List<User> findByTotalCorrectOrderByTotalCorrectDesc(Integer totalCorrect);
	
	public List<Result> findByQuizID(Integer quizID);
	
	
	//To get the total result of one student
	@Query(value = "SELECT r.userid,SUM(r.totalcorrect) FROM result r where r.userid = :userid", nativeQuery = true)
	public Optional<Object> findGrouped(@Param("userid") String userID);

	

}
