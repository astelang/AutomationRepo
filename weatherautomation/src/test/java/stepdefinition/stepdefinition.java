
package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.io.IOException;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class stepdefinition {
	


	@Given("^User on the Home Page of openweathermaps Website$")
    public void user_on_the_home_page_of_openweathermaps_website()  {
       
    }

	@When("^without Name \"([^\"]*)\"$")
	public void without_Name(String arg1) throws IOException  {
		Base.getInstanceOfDriver().findElement(By.xpath("//input[contains(@placeholder,'Your city name')]")) .sendKeys(arg1); }
	    
	 @When("^User enters the City Name as \"([^\"]*)\"$") public void
	  user_enters_the_City_Name_as(String arg2) throws IOException { 

	  Base.getInstanceOfDriver().findElement(By.
	  xpath("//input[contains(@placeholder,'Your city name')]")) .sendKeys(arg2); }
    
    @And("^USer clicks on search$")
    public void user_clicks_on_search() throws IOException, InterruptedException   {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/main/div[2]/div/div/div/div[2]/div/form/button")) .click();
    			 Thread.sleep(3000); }
    			
    

    @Then("^\"([^\"]*)\" Weather Condition should not get displayed$")
    public void something_weather_condition_should_not_get_displayed(String arg2) throws IOException  {
    	 Assert.assertTrue(Base.getInstanceOfDriver() .findElement(By.xpath("html/body/main/div[4]/div/div/div/div/div")).getText().contains(arg2)); }
    
    @Then("^\"([^\"]*)\" Weather Condition should get displayed$") public void
	  something_weather_condition_should_get_displayed(String arg2) throws
	  IOException {
	  
	  Assert.assertTrue(Base.getInstanceOfDriver() .findElement(By.xpath(
	  "html/body/main/div[4]/div/div/div/div/table/tbody/tr/td[2]")).getText().
	  contains(arg2)); }
    
    
    @And("^User clicks on Weather to come on Home Page$")
    public void user_clicks_on_weather_to_come_on_home_page() throws IOException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[2]/div/div/div/div[2]/ul/li[3]/a")).click(); }
    


    @When("^User verify OpenWeather logo is present on openweathermaps Website$")
    public void user_verify_openweather_logo_is_present_on_openweathermaps_website() throws IOException{
     
    	WebElement logo = Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[2]/div/div/div/div[1]/a/img"));
    	   
    	   logo.isDisplayed();
    	   
    	   //Assert.assertTrue("openweather", logoPresent);
    	
    	
    
}
    
    @And("^User Clicks on Weather in your city input search box$")
    public void user_clicks_on_weather_in_your_city_input_search_box() throws IOException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/a[4]")).click(); 
    }
    
    @And("^Enter City Name as \"([^\"]*)\"$")
    public void enter_city_name_as_something(String arg4) throws IOException {
        
    	Base.getInstanceOfDriver().findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/input[1]")) .sendKeys(arg4);
    }
    
    @And("^User clicks on search once the City details entered$")
    public void user_clicks_on_search_once_the_city_details_entered() throws IOException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/span[1]/button[1]/i[1]")).click();
    }
    
    @Then("^\"([^\"]*)\" City Weather details should get displayed$")
    public void something_city_weather_details_should_get_displayed(String arg5) throws IOException  {
       
   
    Assert.assertTrue(Base.getInstanceOfDriver() .findElement(By.xpath("/html[1]/body[1]/main[1]/div[4]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[2]")).getText().contains(arg5));
       
    }

    @And("^User clicks on Sign in button and Sign in form details should get display$")
    public void user_clicks_on_sign_in_button_and_sign_in_form_details_should_get_display() throws IOException, InterruptedException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[1]/div/div/div[1]/a[3]")).click();
    	Thread.sleep(3000);
    }

    
    @And("^User clicks on Sign up button and Sign up details should get display$")
    public void user_clicks_on_sign_up_button_and_sign_up_details_should_get_display() throws IOException, InterruptedException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[1]/div/div[1]/a[3]")).click();
    	Thread.sleep(3000);
    }
    
    @And("^User clicks on Weather button to come on Home Page$")
    public void user_clicks_on_weather_button_to_come_on_home_page() throws InterruptedException, IOException {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[2]/div/div/div/div[2]/ul/li[1]/a")).click();
    	Thread.sleep(3000);
    }
   
    
    @When("^User clicks on C button displaying on the Top window$")
    public void user_clicks_on_c_button_displaying_on_the_top_window() throws IOException, InterruptedException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[1]/div/div/div[2]/label/p/span[1]")).click();
    	Thread.sleep(3000);
    }
    


    @Then("^\"([^\"]*)\" temperature gets display for the City$")
    public void something_temperature_gets_display_for_the_city(String arg6) throws IOException  {
        
    Assert.assertTrue(Base.getInstanceOfDriver() .findElement(By.xpath("/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/span[1]/div[1]/h3[1]")).getText().contains(arg6));
    }


    @And("^if the User clicks on F button displaying on the Top window$")
    public void if_the_user_clicks_on_f_button_displaying_on_the_top_window() throws IOException, InterruptedException  {
    	Base.getInstanceOfDriver().findElement(By.xpath("html/body/div[1]/div/div/div[2]/label/p/span[2]")).click();
    	Thread.sleep(3000);
    }

    @Then("^\"([^\"]*)\" temperature should display for the City$")
    public void something_temperature_should_display_for_the_city(String arg7) throws IOException  {
    	Assert.assertTrue(Base.getInstanceOfDriver() .findElement(By.xpath("/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/span[1]/div[1]/h3[1]")).getText().contains(arg7)); 
    }



}









