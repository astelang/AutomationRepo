Feature: Weather Conditions in different cities

@Scenario1
Scenario: Weather Conditions in different cities
Given User on the Home Page of openweathermaps Website
When User verify OpenWeather logo is present on openweathermaps Website
And User Clicks on Weather in your city input search box
And Enter City Name as "Hyderabad"
And User clicks on search once the City details entered
Then "Hyderabad" City Weather details should get displayed
And User clicks on Sign in button and Sign in form details should get display
And User clicks on Sign up button and Sign up details should get display
And User clicks on Weather button to come on Home Page
When User clicks on C button displaying on the Top window
Then "C" temperature gets display for the City
And if the User clicks on F button displaying on the Top window
Then "F" temperature should display for the City



@Scenario2
Scenario: Weather Conditions in different cities
Given User on the Home Page of openweathermaps Website
When without Name "df6d7f6" 
And USer clicks on search
Then "Not found" Weather Condition should not get displayed
And User clicks on Weather to come on Home Page



@Scenario3
Scenario: Weather Conditions in different cities
Given User on the Home Page of openweathermaps Website
When User enters the City Name as "Mumbai" 
And USer clicks on search
Then "Mumbai" Weather Condition should get displayed
And User clicks on Weather to come on Home Page
