package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="result")
public class Result {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "resultid")
	public Integer resultID;
	
	@Column(name="userid")
	public String userID;
	
	
	@Column(name="quizid")
	public Integer quizID;
	
	@Column(name="totalcorrect")
	public Integer totalCorrect;
	
	@Column(name = "quizname")
	public String quizName;

	public Result() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Result(Integer resultID, String userID, Integer quizID, Integer totalCorrect, String quizName) {
		super();
		this.resultID = resultID;
		this.userID = userID;
		this.quizID = quizID;
		this.totalCorrect = totalCorrect;
		this.quizName = quizName;
	}

	public Integer getResultID() {
		return resultID;
	}

	public void setResultID(Integer resultID) {
		this.resultID = resultID;
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

	public Integer getTotalCorrect() {
		return totalCorrect;
	}

	public void setTotalCorrect(Integer totalCorrect) {
		this.totalCorrect = totalCorrect;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

	@Override
	public String toString() {
		return "Result [resultID=" + resultID + ", userID=" + userID + ", quizID=" + quizID + ", totalCorrect="
				+ totalCorrect + ", quizName=" + quizName + "]";
	}

	
	
	

}
