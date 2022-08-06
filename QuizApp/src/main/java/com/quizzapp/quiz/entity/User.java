package com.quizzapp.quiz.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userlogin")
public class User {
	
	@Id
	@Column(name="userid")
	public String  userID;
	
	@Column(name="username")
	public String userName;
	
	@Column(name="password")
	public String password;
	
	@Column(name="role")
	public String role;
	
	
	public User() {
		
	}
	
	
	public User(String userID,String userName,String password,String role) {
		this.userID = userID;
		this.userName = userName;
		this.password = password;
		this.role = role;
		
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", userName=" + userName + ", password=" + password + ", role=" + role + "]";
	}
	
	
	

}
