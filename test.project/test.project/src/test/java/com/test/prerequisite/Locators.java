package com.test.prerequisite;

public interface Locators {
	
	public interface HomeScreen
	{
		String login = ".//*[@id='login']";
	}
	
	public interface LoginScreen
	{
		String emailId = ".//*[@id='inputEmail']";
		String password = ".//*[@id='inputPassword']";
		String login = ".//*[@id='login']";
		String errorAlert = "//div[@class='alert alert-danger text-center']";
	}
	
	public interface Dashboard
	{
		String welcomeMsg = ".//*[@id='main-body']/div/div/div[1]/div/h1";
	}
	
	public interface ForgotPassword
	{
		String forgotPassword = "(//a[contains(text(),'Forgot Password?')])[2]";
		String emaiID= "inputEmail";
		String submitButton= "//button[@type='submit']";
		String mailSent= "//div[@class='alert alert-success text-center']";
	}

}
