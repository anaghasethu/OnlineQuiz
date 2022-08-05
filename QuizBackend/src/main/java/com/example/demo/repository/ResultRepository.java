package com.example.demo.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Question;
import com.example.demo.entity.Result;


@RepositoryRestResource(path="result")
@CrossOrigin("http://localhost:4200/")
public interface ResultRepository extends JpaRepository<Result , Integer>{
	
	
	
	
	public List<Result> findByUserIDIgnoreCase(String userID);
	
	//public List<User> findByTotalCorrectOrderByTotalCorrectDesc(Integer totalCorrect);
	
	public List<Result> findByQuizID(Integer quizID);
	
	@Query(value = "SELECT userid,SUM(totalcorrect) FROM result",nativeQuery = true)
	public List<Result> findByUserid();
	

}
