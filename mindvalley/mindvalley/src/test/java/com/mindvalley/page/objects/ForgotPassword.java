package com.mindvalley.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.mindvalley.prerequisites.InitialSetup;

public class ForgotPassword {
	
	public static WebElement element=null;
	
	public static WebElement forgotPassword(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath("(//a[contains(text(),'Forgot Password?')])[2]"));
		return element;
	}
	
	public static WebElement emaiID(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.id("inputEmail"));
		return element;
	}
	
	public static WebElement submitButton(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath("//button[@type='submit']"));
		return element;
	}
	
	public static WebElement mailSent(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath("//div[@class='alert alert-success text-center']"));
		return element;
	}
}
