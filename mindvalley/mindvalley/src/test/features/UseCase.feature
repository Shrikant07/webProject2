Feature:  Test case to validate login functionality and validate the forgot password 

Description: To be successfully logged in to the website,
a user should fill in Email and Password fields with correct values.
If email and/or password values are incorrect,the website will display an appropriate message.
 

@smoke 
Scenario: Verify validation for login button functionality with blank username and blank password 

	Given User is on Login Page 
	When User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
@smoke 
Scenario: Validate login functionality with blank email and valid password and verify the error message 

	Given User is on Login Page 
	When User enters blank Username 
	And User enters valid Password 
	And User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
@smoke 
Scenario: Validate login functionality with valid email and blank password and verify the error message 

	Given User is on Login Page 
	When User enters valid Username 
	And User enters blank Password 
	And User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
@smoke 
Scenario: Validate login functionality with Invalid email and Invalid password and verify the error message 

	Given User is on Login Page 
	When User enters Invalid Username 
	And User enters Invalid Password 
	And User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
@smoke 
Scenario: Validate login functionality with Invalid email and Valid password and verify the error message 

	Given User is on Login Page 
	When User enters Invalid Username 
	And User enters valid Password 
	And User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
@smoke 
Scenario: Validate login functionality with valid email and Invalid password and verify the error message 

	Given User is on Login Page 
	When User enters valid Username 
	And User enters Invalid Password 
	And User clicks on login button 
	Then Application should display validation message properly
	And User close the browser 
	
	@smoke 
Scenario: Validate login functionality with valid email and valid password and verify the dashboard page 

	Given User is on Login Page 
	When User enters valid Username 
	And User enters valid Password 
	And User clicks on login button 
	Then User should be re-directed to dashboard page
	And User close the browser
	
	
@smoke 
Scenario: Validate forgot password functionality 
	
	Given User is on Login Page
	When User click on fogot password button 
	Then  User should navigate to password reset page 
	When User enters emailID 
	And User click on submit button 
	Then Application should display mail sent success message
	And User close the browser  