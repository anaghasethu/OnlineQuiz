package com.quizzapp.quiz.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quizcategory")
public class Category {
	
	@Id
	@Column(name="category")
	public String category;
	
	public Category() {
			
		}
	
	public Category(String category) {
		this.category = category;
	}
	
	@Override
	public String toString() {
		return "Category [category=" + category + "]";
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	

}
