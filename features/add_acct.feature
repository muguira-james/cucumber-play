Feature: Add a new account

Scenario: Add_account success

Given we have a handle to the WeKnowWho func and db
When we put user name and contact in 
Then we should be able to find them in the db

Scenario: Add_account failure
Given we have a handle to the WeKnowWho func and db
When we add a second user name and contact into addAcct
Then should be 2 entries in db