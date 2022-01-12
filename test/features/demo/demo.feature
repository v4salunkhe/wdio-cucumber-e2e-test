Feature: Demo Feature

    
    Feature Description
    Scenario Outline: Run the first demo feature
        Given Google page is opened
        When Search with <searchItem>
        Then Click on the first search result
        Then URL should match <expectedURL>

        Examples:
            | testID | searchItem   | expectedURL               |
            | TC_01  | wdio         | https://webdriver.io/     |
            | TC_02  | selenium     | https://www.selenium.dev/ |
            | TC_03  | appium       | https://appium.io/        |
            | TC_04  | cucumber bdd | https://cucumber.io/      |
               