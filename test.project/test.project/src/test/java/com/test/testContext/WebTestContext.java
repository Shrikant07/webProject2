package com.test.testContext;

import com.test.objectManager.PageObjectManager;
import com.test.prerequisite.InitialSetup;


public class WebTestContext {

	private PageObjectManager objectManager;
	
	public WebTestContext()
	{
		objectManager = new PageObjectManager(InitialSetup.getInstance().getWebDriver());
	}
	
	public PageObjectManager getPageObjectManager()
	{
		return objectManager;
	}
}
