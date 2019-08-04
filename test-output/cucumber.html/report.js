$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User is able to create new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Login Button on prelogin page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User entered \"xcardtier1@gmail.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Title on HonmePage is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should click Contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should navigate to Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should see Contact page details displayed completely",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click New Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\"  and \"\u003cemailId\u003e\" then click Save",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "signOut and closeBrowser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "emailId"
      ],
      "line": 20,
      "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;;1"
    },
    {
      "cells": [
        "firstName1",
        "lastname1",
        "emailId1@email.com"
      ],
      "line": 21,
      "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;;2"
    },
    {
      "cells": [
        "firstName2",
        "lastname2",
        "emailId2@email.com"
      ],
      "line": 22,
      "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "User is able to create new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Login Button on prelogin page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User entered \"xcardtier1@gmail.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Title on HonmePage is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should click Contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should navigate to Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should see Contact page details displayed completely",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click New Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter \"firstName1\" and \"lastname1\"  and \"emailId1@email.com\" then click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "signOut and closeBrowser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefination.user_is_on_LoginPage()"
});
formatter.result({
  "duration": 8551250900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.click_Login_Button_on_prelogin_page()"
});
formatter.result({
  "duration": 15312727600,
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
  "location": "LoginDefination.user_entered_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 394870900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 88287000,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 1255587700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.title_on_HonmePage_is_Free_CRM()"
});
formatter.result({
  "duration": 9136700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_click_Contacts_link()"
});
formatter.result({
  "duration": 403043000,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_navigate_to_Contacts_page()"
});
formatter.result({
  "duration": 39464900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_see_Contact_page_details_displayed_completely()"
});
formatter.result({
  "duration": 71699900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_click_New_Button()"
});
formatter.result({
  "duration": 218910400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName1",
      "offset": 7
    },
    {
      "val": "lastname1",
      "offset": 24
    },
    {
      "val": "emailId1@email.com",
      "offset": 41
    }
  ],
  "location": "LoginDefination.enter_and_and_then_click_Save(String,String,String)"
});
formatter.result({
  "duration": 12716977200,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.signout_and_closeBrowser()"
});
formatter.result({
  "duration": 1189482400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User is able to create new contact",
  "description": "",
  "id": "free-crm-create-contacts;user-is-able-to-create-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Login Button on prelogin page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User entered \"xcardtier1@gmail.com\" and \"Test@123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Title on HonmePage is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User should click Contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should navigate to Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should see Contact page details displayed completely",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click New Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter \"firstName2\" and \"lastname2\"  and \"emailId2@email.com\" then click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "signOut and closeBrowser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginDefination.user_is_on_LoginPage()"
});
formatter.result({
  "duration": 6189123400,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.click_Login_Button_on_prelogin_page()"
});
formatter.result({
  "duration": 15568175700,
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
  "location": "LoginDefination.user_entered_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 422814900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 87477600,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 1294299100,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.title_on_HonmePage_is_Free_CRM()"
});
formatter.result({
  "duration": 11235900,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_click_Contacts_link()"
});
formatter.result({
  "duration": 466495200,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_navigate_to_Contacts_page()"
});
formatter.result({
  "duration": 9569200,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_should_see_Contact_page_details_displayed_completely()"
});
formatter.result({
  "duration": 91050700,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.user_click_New_Button()"
});
formatter.result({
  "duration": 274781300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName2",
      "offset": 7
    },
    {
      "val": "lastname2",
      "offset": 24
    },
    {
      "val": "emailId2@email.com",
      "offset": 41
    }
  ],
  "location": "LoginDefination.enter_and_and_then_click_Save(String,String,String)"
});
formatter.result({
  "duration": 12782716100,
  "status": "passed"
});
formatter.match({
  "location": "LoginDefination.signout_and_closeBrowser()"
});
formatter.result({
  "duration": 1259538100,
  "status": "passed"
});
});