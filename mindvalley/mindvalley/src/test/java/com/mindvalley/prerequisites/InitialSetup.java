package com.mindvalley.prerequisites;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.mindvalley.java.utilities.FunctionLibrary;

public class InitialSetup {
	
	public static WebDriver wd;
	
	//Read Property File
	static String dataFile = "datafile.properties";
	static Properties propertyFile = FunctionLibrary.getPropertyFile(dataFile);
	
	
	public static void setup() throws InterruptedException
			
	{
		wd=new FirefoxDriver();
		
		wd.get(propertyFile.getProperty("URL"));
		
		wd.manage().window().maximize();
		
		InitialSetup.wd.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		
	}
	
	
	public static void waitForPageLoadedState() {
        ExpectedCondition<Boolean> expectation = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver wd) 
                    {
                        return ((JavascriptExecutor) wd).executeScript("return document.readyState").toString().equals("complete");
                    }
                };
        try {
            Thread.sleep(1000);
            WebDriverWait wait = new WebDriverWait(wd, 60);
            wait.until(expectation);
        } catch (Throwable error) {
            Assert.fail("Timeout waiting for Page Load Request to complete.");
        }
	}
	
	public static void launchApplication() throws InterruptedException
	{
		InitialSetup.setup();
		InitialSetup.waitForPageLoadedState();
	}
	
	public static void tearDown()
	{
		wd.quit();
	}

}
