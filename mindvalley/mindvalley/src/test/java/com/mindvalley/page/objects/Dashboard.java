package com.mindvalley.page.objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.mindvalley.prerequisites.InitialSetup;

public class Dashboard {
	
	public static WebElement element=null;
	
	public static WebElement welcomeMsg(WebDriver wd)
	{
		element = InitialSetup.wd.findElement(By.xpath(".//*[@id='main-body']/div/div/div[1]/div/h1"));
		return element;
	}

}