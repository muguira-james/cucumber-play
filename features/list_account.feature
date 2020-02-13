Feature: List all accouts

Scenario: list_account
Given we have a db
When I call list_account
Then I see it