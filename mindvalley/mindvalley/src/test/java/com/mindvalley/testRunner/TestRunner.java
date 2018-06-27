package com.mindvalley.testRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/features/"},
		glue={"com.mindvalley.stepDefinition"},
		format = {"pretty", "json:target/json/output.json", "html:target/html/"},
//		plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},
	
		tags = {"@smoke"}
		
		)

public class TestRunner {
	
    @BeforeClass
    public static void setup() {
    	
//    	ExtentCucumberFormatter.initiateExtentCucumberFormatter();
//    	ExtentCucumberFormatter.loadConfig(new File("/Users/shrikant.kanase/workspace/mindvalley/resources/extent-config.xml"));
    }

}
