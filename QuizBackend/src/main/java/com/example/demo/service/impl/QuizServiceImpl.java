package com.example.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entity.Question;
import com.example.demo.repository.ResultRepository;
import com.example.demo.service.QuizService;

public class QuizServiceImpl implements QuizService {

	@Autowired
	ResultRepository resultRepo;
	
//	@Autowired
//	Question question;
//	
	public Integer grade = 0;

	@Override
	public Integer addResult() {
		// TODO Auto-generated method stub
		return null;
	}
	
//	@Override
//	public Integer addResult() {
//		// TODO Auto-generated method stub
//		if(question.getAnswer() == question.getChoice())
//			grade =+ 1;
//		
//		return grade;
//	}

}
