package com.test.stepDefinition;

import com.test.page.objects.DashboardScreen;
import com.test.page.objects.ForgotScreen;
import com.test.page.objects.HomeScreen;
import com.test.page.objects.LoginScreen;
import com.test.testContext.WebTestContext;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition 
{
	
	HomeScreen homeScreen;
	LoginScreen loginScreen;
	DashboardScreen mainScreen;
	ForgotScreen ForgotScreen;
	WebTestContext webTestContext;
	
	public LoginStepDefinition(WebTestContext context)
	{
		webTestContext = context;
		homeScreen = webTestContext.getPageObjectManager().getHomeScreen();
		loginScreen = webTestContext.getPageObjectManager().getLoginScreen();
		mainScreen = webTestContext.getPageObjectManager().getMainScreen();
		ForgotScreen= webTestContext.getPageObjectManager().getForgotScreen();
	}
	
	@Given("^user is on Login Page$")
	public void user_is_on_Login_Page()
	{
	    homeScreen.launchApplication();
	    
	}

	@When("^user enters Invalid Username and Password$")
	public void user_enters_Invalid_Username_and_Password(DataTable userCredentials)
	{
	    loginScreen.fillEmail(userCredentials);
	    loginScreen.fillIncorrectPassword(userCredentials);
	}
	
	@When("^user enters blank Username and valid Password$")
	public void user_enters_blank_Username_and_valid_Password(DataTable userCredentials)
	{
	    loginScreen.fillEmail(userCredentials);
	    loginScreen.fillIncorrectPassword(userCredentials);
	}
	
	@When("^user enters valid Username and blank Password$")
	public void user_enters_valid_Username_and_blank_Password(DataTable userCredentials)
	{
	    loginScreen.fillEmail(userCredentials);
	    loginScreen.fillIncorrectPassword(userCredentials);
	}

	@When("^clicks on login button$")
	public void clicks_on_login_button()
	{
		homeScreen.clickLoginLink();
	}

	@Then("^web page should display validation message$")
	public void web_page_should_display_validation_message()
	{
	    loginScreen.validateErrorMessage();
	}

	@When("^user enters valid username and password$")
	public void user_enters_valid_username_and_password(DataTable userCredentials)
	{
		loginScreen.fillEmail(userCredentials);
		loginScreen.fillIncorrectPassword(userCredentials);
	}

	@Then("^user should navigate to dashboard screen$")
	public void user_should_navigate_to_dashboard_screen()
	{
	    mainScreen.loginSuccess();
	}
	
	@When("^user clicks on forgot passward$")
	public void user_click_on_forgot_password__button() throws Throwable {
		
		ForgotScreen.clickForgot();

	}
	
	@Then("^user should navigate to forgot password screen$")
	public void user_should_navigate_to_password_reset_page() throws Throwable {
		
		ForgotScreen.validateforgotscreen();
	}
	

	@When("^Enters valid emailID$")
	public void user_enters_emailID(DataTable userCredentials) throws Throwable {
		
		ForgotScreen.enterEmail(userCredentials);

	}
	
	@When("^clicks on submit button$")
	public void user_click_on_submit_button() throws Throwable {

		ForgotScreen.submit();
	}

	@Then("^web page should display mail sent message$")
	public void i_should_navigate_to_dashboard_successfully() throws Throwable {
		
		ForgotScreen.mailSuccess();
		
	}

	@Then("^close the browser$")
	public void close_the_browser() throws InterruptedException
	{
	    homeScreen.closeApplication();
	}




}
