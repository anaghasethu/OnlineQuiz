package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="result")
public class Result {
	
	@Column(name="userid")
	public String userID;
	
	@Id
	@Column(name="quizid")
	public Integer quizID;
	
	@Column(name="totalcorrect")
	public Integer totalCorrect = 0;
	
	
	
	public Result() {
		
	}
	
	public Result(String userID,Integer quizID,Integer totalCorrect) {
		
		this.userID = userID;
		this.quizID = quizID;
		this.totalCorrect = totalCorrect;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public Integer getQuizID() {
		return quizID;
	}

	public void setQuizID(Integer quizID) {
		this.quizID = quizID;
	}

	public Integer getTotalcorrect() {
		return totalCorrect;
	}

	public void setTotalcorrect(Integer totalCorrect) { 
		
		this.totalCorrect = totalCorrect;
	}
	
	public Integer addresult(Integer quizID) {
		
		return quizID;
		
	}
	

	@Override
	public String toString() {
		return "Result [userID=" + userID + ", quizID=" + quizID + ", totalCorrect=" + totalCorrect + "]";
	}

}
