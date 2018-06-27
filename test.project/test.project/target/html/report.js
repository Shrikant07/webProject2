$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/LoginCase.feature");
formatter.feature({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page",
  "description": "",
  "name": "Test case to verify successful login and identify main dashboard of web page",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;click-on-login-button-without-entering-credentials-and-check-validation-message",
  "description": "",
  "name": "Click on login button without entering credentials and check validation message",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "web page should display validation message",
  "keyword": "Then ",
  "line": 6
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;validate-login-functionality-with-blank-email-and-valid-password-and-check-validation-message",
  "description": "",
  "name": "Validate login functionality with blank email and valid password and check validation message",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "user enters blank Username and valid Password",
  "keyword": "When ",
  "line": 10,
  "rows": [
    {
      "cells": [
        "",
        "pass@123"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "web page should display validation message",
  "keyword": "Then ",
  "line": 13
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;validate-login-functionality-with-valid-email-and-blank-password-and-check-validation-message",
  "description": "",
  "name": "Validate login functionality with valid email and blank password and check validation message",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "user enters valid Username and blank Password",
  "keyword": "When ",
  "line": 17,
  "rows": [
    {
      "cells": [
        "shrikant.kanase@gmail.com",
        ""
      ],
      "line": 18
    }
  ]
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "web page should display validation message",
  "keyword": "Then ",
  "line": 20
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;validate-login-functionality-with-invalid-email-and-invalid-password-and-check-validation-message",
  "description": "",
  "name": "Validate login functionality with Invalid email and Invalid password and check validation message",
  "keyword": "Scenario",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 24
});
formatter.step({
  "name": "user enters Invalid Username and Password",
  "keyword": "When ",
  "line": 25,
  "rows": [
    {
      "cells": [
        "shrikant.kanase@test.com",
        "xyz@123"
      ],
      "line": 26
    }
  ]
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "web page should display validation message",
  "keyword": "Then ",
  "line": 28
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;validate-login-functionality-with-invalid-email-and-invalid-password-and-check-validation-message",
  "description": "",
  "name": "Validate login functionality with Invalid email and Invalid password and check validation message",
  "keyword": "Scenario",
  "line": 30,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 31
});
formatter.step({
  "name": "user clicks on forgot passward",
  "keyword": "When ",
  "line": 32
});
formatter.step({
  "name": "user should navigate to forgot password screen",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "Enters valid emailID",
  "keyword": "And ",
  "line": 34,
  "rows": [
    {
      "cells": [
        "shrikant.kanase@gmail.com"
      ],
      "line": 35
    }
  ]
});
formatter.step({
  "name": "clicks on submit button",
  "keyword": "And ",
  "line": 36
});
formatter.step({
  "name": "web page should display mail sent message",
  "keyword": "And ",
  "line": 37
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "id": "test-case-to-verify-successful-login-and-identify-main-dashboard-of-web-page;login-with-valid-credentials-and-verify-successful-login-page",
  "description": "",
  "name": "Login with valid credentials and verify successful login page",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "user is on Login Page",
  "keyword": "Given ",
  "line": 41
});
formatter.step({
  "name": "user enters valid username and password",
  "keyword": "When ",
  "line": 42,
  "rows": [
    {
      "cells": [
        "shrikant.kanase@gmail.com",
        "pass@123"
      ],
      "line": 43
    }
  ]
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "user should navigate to dashboard screen",
  "keyword": "Then ",
  "line": 45
});
formatter.step({
  "name": "close the browser",
  "keyword": "And ",
  "line": 46
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});