package com.example.demo.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Quiz;



@RepositoryRestResource(path="quiz")
@CrossOrigin("http://localhost:4200/")
public interface QuizRepository extends JpaRepository<Quiz , Integer>{
	public List<Quiz> findByCategoryNameIgnoreCase(String categoryName);
	
	

}
