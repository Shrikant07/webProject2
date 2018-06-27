package com.test.testRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
//		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},
		format = {"pretty", "json:target/json/output.json", "html:target/html/"},
		features = {"src/test/features/LoginCase.feature"},
		glue = {"com.mindvalley.web.stepDefinition"}
		)
public class RunnerTest 
{
	@BeforeClass
	public static void setup()
	{	
//		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
//		ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));
	}

}
