$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\r\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 5236513358,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the Login page URL \"http://demo.nopcommerce.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3498600447,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 1651886396,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 68400323,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1902565951,
  "status": "passed"
});
formatter.before({
  "duration": 6307408787,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#When I enter username as \"admin\""
    },
    {
      "line": 14,
      "value": "#And I enter password as \"password\""
    },
    {
      "line": 15,
      "value": "#Then I sould see application homepage"
    },
    {
      "line": 16,
      "value": "#And I sould see administrator text message on home Page"
    }
  ],
  "line": 19,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@sanity11"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on the Login page URL \"http://demo.nopcommerce.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.nopcommerce.com/",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1929668125,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 1675904576,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 61350113,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1788383931,
  "status": "passed"
});
});