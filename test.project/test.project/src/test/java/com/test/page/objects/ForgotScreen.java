package com.test.page.objects;

import java.util.List;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.test.prerequisite.InitialSetup;
import com.test.prerequisite.Locators;

import cucumber.api.DataTable;

public class ForgotScreen implements Locators.ForgotPassword {
	
	public ForgotScreen(WebDriver webDriver)
	{
		PageFactory.initElements(webDriver, this);
	}
	
	//page object for forgot button
	@FindBy(how = How.XPATH, using = forgotPassword)
	private WebElement forgotButton;
	
	//page object for emailID field
	@FindBy(how = How.ID, using = emaiID)
	private WebElement emailIDField;
	
	//page object for submit button
	@FindBy(how = How.XPATH, using = submitButton)
	private WebElement submit;
	
	//page object for mail sent message
	@FindBy(how = How.XPATH, using = mailSent)
	private WebElement mailSentSuccess;
	
	
	public void clickForgot()
	{
		forgotButton.click();
		InitialSetup.getInstance().waitForPageLoadedState();
	}
	
	public void enterEmail(DataTable validEmail)
	{
		
		List<List<String>> data = validEmail.raw();
		emailIDField.sendKeys(data.get(0).get(0));
	}
	
	public void submit()
	{
		submit.click();
	}
	
	public void validateforgotscreen()
	{
		try
		{
			if(submit.isDisplayed()==true)
			{
				System.out.println("# Forgot password screen loaded properly !!!");
			}
		}catch(NoSuchElementException e)
		
		{
			System.err.println("# Forgot password screen loading issue...");
		}
	}
	
	public void mailSuccess()
	{		
		try
		{
			if(mailSentSuccess.isDisplayed()==true)
			{
				System.out.println("# Mail sent message displayed after submitting emailID !!!");
			}
		}catch(NoSuchElementException e)
		
		{
			System.err.println("# Mail sent success message not displayed ...");
		}
	}
	}
