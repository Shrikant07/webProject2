package com.mindvalley.java.utilities;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.mindvalley.prerequisites.InitialSetup;

public class FunctionLibrary {
	
	
public static Properties getPropertyFile(String propFile){
	
	Properties properties = new Properties();
//	String propFile = "config.properties";
	InputStream resourceAsStream = InitialSetup.class.getClassLoader().getResourceAsStream(propFile);
	
	if(resourceAsStream!=null){
		try {
			properties.load(resourceAsStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	return properties;
}

}
