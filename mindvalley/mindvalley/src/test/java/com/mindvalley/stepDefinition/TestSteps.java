package com.mindvalley.stepDefinition;

import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;

import com.mindvalley.java.utilities.FunctionLibrary;
import com.mindvalley.page.objects.Dashboard;
import com.mindvalley.page.objects.ForgotPassword;
import com.mindvalley.page.objects.LoginScreen;
import com.mindvalley.prerequisites.InitialSetup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	
	public static WebDriver wd = null;
	
	//Read Property File
	static String dataFile = "datafile.properties";
	static Properties propertyFile = FunctionLibrary.getPropertyFile(dataFile);
	
	@Given("^User is on Login Page$")
	public void user_on_Login_Page() throws Throwable {
		
		InitialSetup.launchApplication();
	}

	@When("^User enters Invalid Username$")
	public void user_enters_Invalid_Username_and_Password() throws Throwable {
		
		LoginScreen.emailIdField(wd).sendKeys(propertyFile.getProperty("InvalidEmail"));
	}
	
	@When("^User enters Invalid Password$")
	public void user_enters_Invalid_Password() throws Throwable {
		
		LoginScreen.passwordField(wd).sendKeys(propertyFile.getProperty("InvalidPwd"));
	}
	
	@When("^User enters valid Username$")
	public void user_enters_valid_Username() throws Throwable {
		
		LoginScreen.emailIdField(wd).sendKeys(propertyFile.getProperty("ValidEmail"));
	}
	
	@When("^User enters valid Password$")
	public void user_enters_valid_Password() throws Throwable {
		
		LoginScreen.passwordField(wd).sendKeys(propertyFile.getProperty("ValidPwd"));
	}
	
	@When("^User enters blank Username$")
	public void user_enters_blank_Username() throws Throwable {
		
		LoginScreen.emailIdField(wd).sendKeys("");
	}
	
	@When("^User enters blank Password$")
	public void user_enters_blank_Password() throws Throwable {
		
		LoginScreen.passwordField(wd).sendKeys("");
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		
		LoginScreen.loginButton(wd).click();
	}

	@Then("^Application should display validation message properly$")
	public void application_should_display_validation_message_properly() throws Throwable {

		try
		{
			if(LoginScreen.errorAlert(wd).isDisplayed()==true)
			{
				System.out.println("# Validation message displayed properly on submitting invalid credentials !!! \n============");
			}
		}catch(NoSuchElementException e)
		{
			System.err.println("# Validation message is missing... \n============");
		}
	}
	
	@When("^User click on fogot password button$")
	public void user_click_on_forgot_password__button() throws Throwable {
		
		ForgotPassword.forgotPassword(wd).click();

	}
	
	@Then("^User should navigate to password reset page$")
	public void user_should_navigate_to_password_reset_page() throws Throwable {
		
		try
		{
			
			if(ForgotPassword.submitButton(wd).isDisplayed()==true)
			{
				System.out.println("# User navigated to password reset page !!! \n============");
			}
		}catch(NoSuchElementException e)
		{
			System.err.println("# Error occured during navigation to password reset page... \n============");
		}
	}
	

	@When("^User enters emailID$")
	public void user_enters_emailID() throws Throwable {
		
		ForgotPassword.emaiID(wd).sendKeys(propertyFile.getProperty("ValidEmail"));
		Thread.sleep(1000);

	}
	
	@When("^User click on submit button$")
	public void user_click_on_submit_button() throws Throwable {

		ForgotPassword.submitButton(wd).click();
	}

	@Then("^Application should display mail sent success message$")
	public void i_should_navigate_to_dashboard_successfully() throws Throwable {
		
		try
		{
			
			if(ForgotPassword.mailSent(wd).isDisplayed()==true)
			{
				System.out.println("# Reset password mail sent successfully !!! \n============");
			}
		}catch(NoSuchElementException e)
		{
			System.err.println("# Error occured during  Reset password process... \n============");
		}
	}
	
	@Then("^User should be re-directed to dashboard page$")
	public void user_should_be_re_directed_to_dashboard_page() throws Throwable {

		try {
			
			Dashboard.welcomeMsg(wd).click();
			System.out.println("# User logged In successfully \n============");
			
		} catch (Exception e) {
			System.out.println("# User login issue.. \n============");
			Assert.fail("# User login issue \n============");
		}
	}

	@Then("^User close the browser$")
	public void close_the_browser() throws Throwable {

		InitialSetup.tearDown();
	}

}
