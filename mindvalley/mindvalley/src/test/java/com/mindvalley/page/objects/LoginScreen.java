package com.mindvalley.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.mindvalley.prerequisites.InitialSetup;

public class LoginScreen {
	
	public static WebElement element=null;
	
	public static WebElement emailIdField(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath(".//*[@id='inputEmail']"));
		return element;
	}
	
	public static WebElement passwordField(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath(".//*[@id='inputPassword']"));
		return element;
	}
	
	public static WebElement loginButton(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath(".//*[@id='login']"));
		return element;
	}
	
	public static WebElement errorAlert(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath("//div[@class='alert alert-danger text-center']"));
		return element;
	}
	

		

}
