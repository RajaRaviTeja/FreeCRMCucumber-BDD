Feature: Free CRM Create Contacts
Scenario Outline: User is able to create new contact

Given User is on LoginPage
Then Click Login Button on prelogin page 
Then User entered "xcardtier1@gmail.com" and "Test@123" 
Then User clicks on login button
And user is on home page
Then Title on HonmePage is Free CRM

When User should click Contacts link
Then User should navigate to Contacts page
Then User should see Contact page details displayed completely
When User click New Button 
When Enter "<firstName>" and "<lastName>"  and "<emailId>" then click Save 
Then signOut and closeBrowser 


Examples: 
           | firstName | lastName | emailId | 
		  | firstName1 | lastname1 | emailId1@email.com |
		  | firstName2 | lastname2 | emailId2@email.com |
		 
		 # | firstName3 | lastname3 | emailId3@email.com |
		 # | firstName4 | lastname4 | emailId4@email.com | 	