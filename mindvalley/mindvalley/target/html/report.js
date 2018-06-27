$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UseCase.feature");
formatter.feature({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password",
  "description": "\nDescription: To be successfully logged in to the website,\na user should fill in Email and Password fields with correct values.\nIf email and/or password values are incorrect,the website will display an appropriate message.",
  "name": "Test case to validate login functionality and validate the forgot password",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;verify-validation-for-login-button-functionality-with-blank-username-and-blank-password",
  "tags": [
    {
      "name": "@smoke",
      "line": 8
    }
  ],
  "description": "",
  "name": "Verify validation for login button functionality with blank username and blank password",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 14
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 13403345063,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1533282574,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 63136953,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 575657929,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-blank-email-and-valid-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 16
    }
  ],
  "description": "",
  "name": "Validate login functionality with blank email and valid password and verify the error message",
  "keyword": "Scenario",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "User enters blank Username",
  "keyword": "When ",
  "line": 20
});
formatter.step({
  "name": "User enters valid Password",
  "keyword": "And ",
  "line": 21
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 24
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10911837453,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_blank_Username()"
});
formatter.result({
  "duration": 72604978,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Password()"
});
formatter.result({
  "duration": 81630087,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1453249039,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 23743669,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 360479004,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-valid-email-and-blank-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 26
    }
  ],
  "description": "",
  "name": "Validate login functionality with valid email and blank password and verify the error message",
  "keyword": "Scenario",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 29
});
formatter.step({
  "name": "User enters valid Username",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "User enters blank Password",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 32
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 34
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10848136671,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Username()"
});
formatter.result({
  "duration": 175623034,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_blank_Password()"
});
formatter.result({
  "duration": 40152754,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1859346856,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 43591210,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 357367683,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-invalid-email-and-invalid-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 36
    }
  ],
  "description": "",
  "name": "Validate login functionality with Invalid email and Invalid password and verify the error message",
  "keyword": "Scenario",
  "line": 37,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 39
});
formatter.step({
  "name": "User enters Invalid Username",
  "keyword": "When ",
  "line": 40
});
formatter.step({
  "name": "User enters Invalid Password",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 42
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 43
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 44
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10932171529,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_Invalid_Username_and_Password()"
});
formatter.result({
  "duration": 155267149,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_Invalid_Password()"
});
formatter.result({
  "duration": 54532952,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1990390858,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 22973937,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 390805806,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-invalid-email-and-valid-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 46
    }
  ],
  "description": "",
  "name": "Validate login functionality with Invalid email and Valid password and verify the error message",
  "keyword": "Scenario",
  "line": 47,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 49
});
formatter.step({
  "name": "User enters Invalid Username",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "User enters valid Password",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 54
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10916694784,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_Invalid_Username_and_Password()"
});
formatter.result({
  "duration": 155866898,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Password()"
});
formatter.result({
  "duration": 52633317,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1948747068,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 54446998,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 350946835,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-valid-email-and-invalid-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 56
    }
  ],
  "description": "",
  "name": "Validate login functionality with valid email and Invalid password and verify the error message",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 59
});
formatter.step({
  "name": "User enters valid Username",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "User enters Invalid Password",
  "keyword": "And ",
  "line": 61
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 62
});
formatter.step({
  "name": "Application should display validation message properly",
  "keyword": "Then ",
  "line": 63
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 64
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10753639550,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Username()"
});
formatter.result({
  "duration": 170760572,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_Invalid_Password()"
});
formatter.result({
  "duration": 104955214,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1916666880,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.application_should_display_validation_message_properly()"
});
formatter.result({
  "duration": 35165852,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 375053240,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-login-functionality-with-valid-email-and-valid-password-and-verify-the-error-message",
  "tags": [
    {
      "name": "@smoke",
      "line": 66
    }
  ],
  "description": "",
  "name": "Validate login functionality with valid email and valid password and verify the error message",
  "keyword": "Scenario",
  "line": 67,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 69
});
formatter.step({
  "name": "User enters valid Username",
  "keyword": "When ",
  "line": 70
});
formatter.step({
  "name": "User enters valid Password",
  "keyword": "And ",
  "line": 71
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And ",
  "line": 72
});
formatter.step({
  "name": "User should be re-directed to dashboard page",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 74
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10838732469,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Username()"
});
formatter.result({
  "duration": 175653823,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_valid_Password()"
});
formatter.result({
  "duration": 56010196,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3056622774,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_should_be_re_directed_to_dashboard_page()"
});
formatter.result({
  "duration": 79260916,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 367858811,
  "status": "passed"
});
formatter.scenario({
  "id": "test-case-to-validate-login-functionality-and-validate-the-forgot-password;validate-forgot-password-functionality",
  "tags": [
    {
      "name": "@smoke",
      "line": 77
    }
  ],
  "description": "",
  "name": "Validate forgot password functionality",
  "keyword": "Scenario",
  "line": 78,
  "type": "scenario"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given ",
  "line": 80
});
formatter.step({
  "name": "User click on fogot password button",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "User should navigate to password reset page",
  "keyword": "Then ",
  "line": 82
});
formatter.step({
  "name": "User enters emailID",
  "keyword": "When ",
  "line": 83
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And ",
  "line": 84
});
formatter.step({
  "name": "Application should display mail sent success message",
  "keyword": "Then ",
  "line": 85
});
formatter.step({
  "name": "User close the browser",
  "keyword": "And ",
  "line": 86
});
formatter.match({
  "location": "TestSteps.user_on_Login_Page()"
});
formatter.result({
  "duration": 10860379260,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_click_on_forgot_password__button()"
});
formatter.result({
  "duration": 1139060119,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_should_navigate_to_password_reset_page()"
});
formatter.result({
  "duration": 58799513,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_emailID()"
});
formatter.result({
  "duration": 1083019453,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_click_on_submit_button()"
});
formatter.result({
  "duration": 928072706,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.i_should_navigate_to_dashboard_successfully()"
});
formatter.result({
  "duration": 37258881,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.close_the_browser()"
});
formatter.result({
  "duration": 367093889,
  "status": "passed"
});
});