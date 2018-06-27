package com.test.page.objects;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.test.prerequisite.Locators;

public class DashboardScreen implements Locators.Dashboard
{
	public DashboardScreen(WebDriver webDriver)
	{
		PageFactory.initElements(webDriver, this);
	}
	
	//page object for my orders tab
	@FindBy(how = How.XPATH, using = orderLink)
	private WebElement orderOption;
	
	public void loginSuccess()
	{
		try
		{
			if(orderOption.isEnabled()==true && orderOption.isDisplayed()==true)
			{
				System.out.println("# User logged in successfully !!!");
			}
		}catch(NoSuchElementException e)
		{
			System.err.println("# Error occured during log in process...");
		}
	}
}
