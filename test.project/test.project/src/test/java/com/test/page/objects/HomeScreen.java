package com.test.page.objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.test.prerequisite.InitialSetup;
import com.test.prerequisite.Locators;

public class HomeScreen implements Locators.HomeScreen
{
	public HomeScreen(WebDriver webDriver)
	{
		PageFactory.initElements(webDriver, this);
	}
	
	//page object for login link
	@FindBy(how = How.XPATH, using = login)
	private WebElement loginbutton;
	
	
	public void launchApplication()
	{
		InitialSetup.getInstance().setup();
		InitialSetup.getInstance().waitForPageLoadedState();
	}
	
	public void clickLoginLink()
	{
		loginbutton.click();
	}
	
	public void closeApplication() throws InterruptedException
	{	
		Thread.sleep(1000);
		InitialSetup.getInstance().tearDown();
	}
}
