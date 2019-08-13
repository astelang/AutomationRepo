$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OpenWeatherMapLandingPage.feature");
formatter.feature({
  "line": 1,
  "name": "Weather Conditions in different cities",
  "description": "",
  "id": "weather-conditions-in-different-cities",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Weather Conditions in different cities",
  "description": "",
  "id": "weather-conditions-in-different-cities;weather-conditions-in-different-cities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on the Home Page of openweathermaps Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User verify OpenWeather logo is present on openweathermaps Website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Clicks on Weather in your city input search box",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter City Name as \"Hyderabad\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on search once the City details entered",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\"Hyderabad\" City Weather details should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Sign in button and Sign in form details should get display",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Sign up button and Sign up details should get display",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Weather button to come on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on C button displaying on the Top window",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "\"C\" temperature gets display for the City",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "if the User clicks on F button displaying on the Top window",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "\"F\" temperature should display for the City",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.user_on_the_home_page_of_openweathermaps_website()"
});
formatter.result({
  "duration": 1084172100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_verify_openweather_logo_is_present_on_openweathermaps_website()"
});
formatter.result({
  "duration": 85192102500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_weather_in_your_city_input_search_box()"
});
formatter.result({
  "duration": 1301724000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad",
      "offset": 20
    }
  ],
  "location": "stepdefinition.enter_city_name_as_something(String)"
});
formatter.result({
  "duration": 929848100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_search_once_the_city_details_entered()"
});
formatter.result({
  "duration": 15224769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad",
      "offset": 1
    }
  ],
  "location": "stepdefinition.something_city_weather_details_should_get_displayed(String)"
});
formatter.result({
  "duration": 457354800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_sign_in_button_and_sign_in_form_details_should_get_display()"
});
formatter.result({
  "duration": 13755201600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_sign_up_button_and_sign_up_details_should_get_display()"
});
formatter.result({
  "duration": 10587618700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_weather_button_to_come_on_home_page()"
});
formatter.result({
  "duration": 16009500900,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_c_button_displaying_on_the_top_window()"
});
formatter.result({
  "duration": 20284631600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 1
    }
  ],
  "location": "stepdefinition.something_temperature_gets_display_for_the_city(String)"
});
formatter.result({
  "duration": 115669500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinition.stepdefinition.something_temperature_gets_display_for_the_city(stepdefinition.java:133)\r\n\tat ✽.Then \"C\" temperature gets display for the City(OpenWeatherMapLandingPage.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepdefinition.if_the_user_clicks_on_f_button_displaying_on_the_top_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "F",
      "offset": 1
    }
  ],
  "location": "stepdefinition.something_temperature_should_display_for_the_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Weather Conditions in different cities",
  "description": "",
  "id": "weather-conditions-in-different-cities;weather-conditions-in-different-cities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User on the Home Page of openweathermaps Website",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "without Name \"df6d7f6\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "USer clicks on search",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "\"Not found\" Weather Condition should not get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on Weather to come on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_on_the_home_page_of_openweathermaps_website()"
});
formatter.result({
  "duration": 414300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "df6d7f6",
      "offset": 14
    }
  ],
  "location": "stepdefinition.without_Name(String)"
});
formatter.result({
  "duration": 692135100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_search()"
});
formatter.result({
  "duration": 12323019800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not found",
      "offset": 1
    }
  ],
  "location": "stepdefinition.something_weather_condition_should_not_get_displayed(String)"
});
formatter.result({
  "duration": 136810600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_weather_to_come_on_home_page()"
});
formatter.result({
  "duration": 9481511300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Weather Conditions in different cities",
  "description": "",
  "id": "weather-conditions-in-different-cities;weather-conditions-in-different-cities",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Scenario3"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User on the Home Page of openweathermaps Website",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User enters the City Name as \"Mumbai\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "USer clicks on search",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "\"Mumbai\" Weather Condition should get displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on Weather to come on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.user_on_the_home_page_of_openweathermaps_website()"
});
formatter.result({
  "duration": 591200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 30
    }
  ],
  "location": "stepdefinition.user_enters_the_City_Name_as(String)"
});
formatter.result({
  "duration": 795752200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_search()"
});
formatter.result({
  "duration": 10937027300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 1
    }
  ],
  "location": "stepdefinition.something_weather_condition_should_get_displayed(String)"
});
formatter.result({
  "duration": 183651300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefinition.user_clicks_on_weather_to_come_on_home_page()"
});
formatter.result({
  "duration": 7427247300,
  "status": "passed"
});
});