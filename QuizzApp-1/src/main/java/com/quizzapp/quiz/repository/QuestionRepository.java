package com.quizzapp.quiz.repository;

import com.quizzapp.quiz.entity.Question;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


@RepositoryRestResource(path="question")
@CrossOrigin("http://localhost:4200/")
public interface QuestionRepository  extends JpaRepository<Question,Integer>{
	
	public List<Question> findByQuizID(Integer quizID);
	
	

}
