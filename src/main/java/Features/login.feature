Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario

Given User is on LoginPage
When Title on LoginPage is Free CRM software for any Business
Then Click Login Button on prelogin page
Then loader with message should be displayed untill user logs in
When LoginPage should have url as "https://ui.freecrm.com/" and title as  "CRM"
Then User entered "xcardtier1@gmail.com" and "Test@123" 
Then User clicks on login button
And user is on home page
Then Title on HonmePage is Free CRM
Then signOut and closeBrowser


