package com.example.demo.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quiz")
public class Quiz {
	
	@Id
	@Column(name="quizid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer quizId;
	
	@Column(name = "quizname")
	public String quizName;
	
	@Column(name="category")
	public String categoryName;
	
	public Quiz() {
		
	}

	public Quiz(Integer quizId, String quizName, String categoryName) {
		super();
		this.quizId = quizId;
		this.quizName = quizName;
		this.categoryName = categoryName;
	}

	public Integer getQuizId() {
		return quizId;
	}

	public void setQuizId(Integer quizId) {
		this.quizId = quizId;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	@Override
	public String toString() {
		return "Quiz [quizId=" + quizId + ", quizName=" + quizName + ", categoryName=" + categoryName + "]";
	}
	
	
}
