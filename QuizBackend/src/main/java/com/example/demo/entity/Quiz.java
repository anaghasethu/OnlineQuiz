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
	
	@Column(name="category")
	public String categoryName;
	
	public Quiz() {
		
	}
	
	public Quiz(Integer quizId,String categoryName) {
		this.quizId = quizId;
		this.categoryName = categoryName;
	}

	public Integer getQuizId() {
		return quizId;
	}

	public void setQuizId(Integer quizId) {
		this.quizId = quizId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	@Override
	public String toString() {
		return "Quiz [quizId=" + quizId + ", categoryName=" + categoryName + "]";
	}

}
