package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="question")
public class Question {
	
	
	@Id
	@Column(name="questionid")
	public Integer questionID;
	
	
	@Column(name="question_q")
	public String question_Q ;
	
	@Column(name="option1")
	public String option1;
	
	@Column(name="option2")
	public String option2;
	
	@Column(name="option3")
	public String option3;
	
	@Column(name="option4")
	public String option4;
	
	@Column(name="answer")
	public String answer;
	
	@Column(name="choice")
	public String choice;
	
	@Column(name="quizid")
	public Integer quizID;
	
	public Integer grade = 0;
	
	public Question() {
		
	}
	
	public Question(Integer questionID,String category,String question_Q ,String option1,
			String option2,String option3,String option4,String answer,String choice,Integer quizID) {
		
		this.questionID = questionID;
		
		this.question_Q = question_Q;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.answer = answer;
		this.choice = choice;
		this.quizID = quizID;
		
	}

	public Integer getQuestionID() {
		return questionID;
	}

	public void setQuestionID(Integer questionID) {
		this.questionID = questionID;
	}


	public String getQuestion_Q() {
		return question_Q;
	}

	public void setQuestion_Q(String question_Q) {
		this.question_Q = question_Q;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getChoice() {
		return choice;
	}

	public void setChoice(String choice) {
		this.choice = choice;
	}

	public Integer getQuizID() {
		return quizID;
	}

	public void setQuizID(Integer quizID) {
		this.quizID = quizID;
	}
	
	public Integer Correctanswers(Integer questionID ) {
		
		if(getAnswer() == getChoice())
			grade =+ 1;
		return grade;
		
	}
	
	
	
	
	@Override
	public String toString() {
		return "Question [questionID=" + questionID + ", question_Q=" + question_Q
				+ ", option1=" + option1 + ", option2=" + option2 + ", option3=" + option3 + ", option4=" + option4
				+ ", answer=" + answer + ", choice=" + choice + ", quizID=" + quizID + "]";
	}
	

}

