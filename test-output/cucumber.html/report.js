$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Create deals data",
  "description": "",
  "id": "freecrm-create-deals-data",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Deals data creation",
  "description": "",
  "id": "freecrm-create-deals-data;deals-data-creation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click Login Button on prelogin page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User entered \"xcardtier1@gmail.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to Deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click New Button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters deals details on deals page and click save",
  "rows": [
    {
      "cells": [
        "Mr",
        "500",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "signOut and closeBrowser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsDefination.user_is_on_LoginPage()"
});
formatter.result({
  "duration": 23703455300,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.click_Login_Button_on_prelogin_page()"
});
formatter.result({
  "duration": 16301220899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xcardtier1@gmail.com",
      "offset": 14
    },
    {
      "val": "Test@123",
      "offset": 41
    }
  ],
  "location": "DealsDefination.user_entered_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 587213899,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 75838800,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 1630450200,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.user_moves_to_Deals_link()"
});
formatter.result({
  "duration": 481054800,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.user_click_New_Button()"
});
formatter.result({
  "duration": 360395499,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.user_enters_deals_details_on_deals_page_and_click_save(DataTable)"
});
formatter.result({
  "duration": 5516242600,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefination.signout_and_closeBrowser()"
});
formatter.result({
  "duration": 1317880400,
  "status": "passed"
});
});