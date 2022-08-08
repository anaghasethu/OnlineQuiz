package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.example.demo.entity.Result;


@RepositoryRestResource(path="result")
@CrossOrigin("http://localhost:4200/")
public interface ResultRepository extends JpaRepository<Result , Integer>{

	public List<Result> findByUserID(String userID);
	
	//public List<User> findByTotalCorrectOrderByTotalCorrectDesc(Integer totalCorrect);
	
	
	//Get a quiz
	public List<Result> findByQuizID(Integer quizID);
	
	//To get the total result of one student
	@Query(value = "SELECT r.userid,SUM(r.totalcorrect) FROM result r where r.userid = :userid and r.quizid = :quizid", nativeQuery = true)
	public Optional<Object[]> findGrouped(@Param("userid") String userID, @Param("quizid") Integer quizID);
	
	//get category result
	@Query(value = "select r.userid, sum(r.totalcorrect) from result r join quiz q where r.quizid=q.quizid and r.userid = :userid and q.category=:category", nativeQuery = true)
	public Optional<Object[]> findCatResult(@Param("userid") String userID, @Param("category") String category);
	
	//get all students result
	@Query(value = "select userid,sum(totalcorrect) from result join quiz where result.quizid = quiz.quizid group by userid;", nativeQuery = true)
	public Optional<Object[]> findAllStudentResult();
		
	//get overall result of student
	@Query(value = "select userid,sum(totalcorrect) from result join quiz where result.quizid = quiz.quizid and userid= :userid group by userid;", nativeQuery = true)
	public Optional<Object[]> findOverallStudentResult(@Param("userid") String userID);
		

}






















