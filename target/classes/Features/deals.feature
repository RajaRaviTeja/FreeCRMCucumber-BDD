Feature: FreeCRM Create deals data

Scenario: Deals data creation

Given User is on LoginPage
Then Click Login Button on prelogin page 
Then User entered "xcardtier1@gmail.com" and "Test@123" 
Then User clicks on login button
Then user is on home page

Then User moves to Deals link
When User click New Button 
Then User enters deals details on deals page and click save
| Mr | 500 | 10 |
Then signOut and closeBrowser


