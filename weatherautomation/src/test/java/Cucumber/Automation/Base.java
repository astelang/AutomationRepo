package Cucumber.Automation;

import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	public static WebDriver driver;
	public static Properties prop;

	private static WebDriver getDriver() throws IOException
	{
		prop=new Properties();
		FileInputStream fis=new FileInputStream("C:\\Users\\astelang\\eclipse-workspace\\test\\src\\test\\java\\global.properties");
		
	prop.load(fis);

	
		
		System.setProperty("webdriver.chrome.driver", "D:\\Automation\\chromedriver.exe");
		
		if(driver == null) {
			driver=new ChromeDriver();
			driver.manage().window().maximize();
		}
   	 
  	driver.get(prop.getProperty("url"));
   	 return driver;
		
	}
	
	public static WebDriver getInstanceOfDriver() throws IOException {
		if(driver == null) {
			return getDriver();
		}else {
			return driver;
		}
	}
	
}
