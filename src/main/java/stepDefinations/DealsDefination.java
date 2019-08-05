package stepDefinations;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealsDefination {

	public WebDriver driver;
	public SoftAssert sAssert=new SoftAssert();
	@Given("^User is on LoginPage$")
	public void user_is_on_LoginPage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/");
		driver.manage().window().maximize();
	}
	
	
	@Then("^Click Login Button on prelogin page$")
	public void click_Login_Button_on_prelogin_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
		Thread.sleep(10000);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	@Then("^User entered \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_entered_Username_and_Password(String Un,String Pwd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.name("email")).sendKeys(Un);
	   driver.findElement(By.name("password")).sendKeys(Pwd);
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
		
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    sAssert.assertTrue(null!=driver.findElement(By.xpath("//div/span[contains(text(),'Raja Ravi N')]")));
	}
	
	@Then("^User moves to Deals link$")
	public void user_moves_to_Deals_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[@href='/deals']")).click();
	}

	@When("^User click New Button$")
	public void user_click_New_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	}

	@Then("^User enters deals details on deals page and click save$")
	public void user_enters_deals_details_on_deals_page_and_click_save(DataTable dealData) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		List<List<String>> dealDataAsListOfList= dealData.raw();
		 	
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(dealDataAsListOfList.get(0).get(0));
		driver.findElement(By.xpath("//input[@name='amount']")).sendKeys(dealDataAsListOfList.get(0).get(1));
		driver.findElement(By.xpath("//input[@name='commission']")).sendKeys(dealDataAsListOfList.get(0).get(2));
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[contains(text(),'Save')]"));
	}
	 
	@Then("^signOut and closeBrowser$")
	public void signout_and_closeBrowser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//div[@role='listbox']/i[@class='settings icon']")).click();
	    WebElement logOutLink = driver.findElement(By.xpath("//span[contains(text(),'Log Out')]"));
	    WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOf(logOutLink));
		logOutLink.click();
		sAssert.assertAll();
		driver.quit();
	   
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
