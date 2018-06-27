package com.test.objectManager;

import org.openqa.selenium.WebDriver;

import com.test.page.objects.HomeScreen;
import com.test.page.objects.LoginScreen;
import com.test.page.objects.DashboardScreen;
import com.test.page.objects.ForgotScreen;
import com.test.prerequisite.InitialSetup;


public class PageObjectManager 
{
	WebDriver webDriver;
	HomeScreen homeScreen;
	LoginScreen loginScreen;
	DashboardScreen mainScreen;
	ForgotScreen ForgotScreen;
	
	public PageObjectManager(WebDriver webDriver)
	{
		this.webDriver = webDriver;
	}
	
	public HomeScreen getHomeScreen()
	{
		return (homeScreen == null) ? new HomeScreen(InitialSetup.getInstance().getWebDriver()) : homeScreen;
	}
	
	public LoginScreen getLoginScreen()
	{
		return (loginScreen == null) ? new LoginScreen(InitialSetup.getInstance().getWebDriver()) : loginScreen;
	}
	
	public DashboardScreen getMainScreen()
	{
		return (mainScreen == null) ? new DashboardScreen(InitialSetup.getInstance().getWebDriver()) : mainScreen;
	}
	
	public ForgotScreen getForgotScreen()
	{
		return (ForgotScreen == null) ? new ForgotScreen(InitialSetup.getInstance().getWebDriver()) :ForgotScreen;
	}
}
