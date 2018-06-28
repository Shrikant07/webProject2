Feature: Test case validation message on login page and verify the forgot password.

@Smoke
Scenario: Click on login button without entering credentials and check validation message 
	
	Given user is on Login Page 
	And clicks on login button 
	Then web page should display validation message 

@Smoke	
Scenario: Validate login functionality with blank email and valid password and check validation message 
	
	Given user is on Login Page 
	When user enters blank Username and valid Password 
		|		| pass@123| 
	And clicks on login button 
	Then web page should display validation message

@Smoke	
Scenario: Validate login functionality with valid email and blank password and check validation message 
	
	Given user is on Login Page 
	When user enters valid Username and blank Password 
		|shrikant.kanase@gmail.com | 	| 
	And clicks on login button 
	Then web page should display validation message 
	
@Smoke	
Scenario: Validate login functionality with Invalid email and Invalid password and check validation message 
	
	Given user is on Login Page 
	When user enters Invalid Username and Password 
		|shrikant.kanase@test.com | xyz@123	| 
	And clicks on login button 
	Then web page should display validation message 

@Smoke	
Scenario: Validate forgot password functionality 
	
	Given user is on Login Page 
	When user clicks on forgot passward
	Then user should navigate to forgot password screen
	And Enters valid emailID
	|shrikant.kanase@gmail.com|
	And clicks on submit button 
	And web page should display mail sent message
	And close the browser 
	
