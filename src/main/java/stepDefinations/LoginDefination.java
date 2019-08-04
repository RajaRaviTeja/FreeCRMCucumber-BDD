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

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginDefination {

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

	@When("^Title on LoginPage is Free CRM software for any Business$")
	public void title_on_LoginPage_is_Free_CRM_software_for_any_Business() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    String loginPageTitle=driver.getTitle().trim();
	    sAssert.assertEquals("Free CRM software for any Business", loginPageTitle);
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}

	@Then("^Click Login Button on prelogin page$")
	public void click_Login_Button_on_prelogin_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
		Thread.sleep(10000);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}

	@Then("^loader with message should be displayed untill user logs in$")
	public void loader_with_message_should_be_displayed_untill_user_logs_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
        //img[contains(@src,'https://api.cogmento.com/static/images/logo-medium.png')]
	/*	WebElement loaderImg=driver.findElement(By.xpath("//div[contains(@class,'cogmento-loading-centered')]/img"));
		String loaderMsg=driver.findElement(By.xpath("//div[@class='cogmento-loading-centered']/br")).getText().trim();
		WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOf(loaderImg));
		sAssert.assertTrue((loaderImg.getSize().height)>0, "Loader is not displayed");
		sAssert.assertEquals("Loading CRM. Please wait...", loaderMsg); */
		
	}


	@When("^LoginPage should have url as \"([^\"]*)\" and title as  \"([^\"]*)\"$")
	public void loginpage_should_have_url_as_and_title_as(String URL, String title) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   // Write code here that turns the phrase above into concrete actions
		   String currentUrl=driver.getCurrentUrl().trim();
		   Assert.assertEquals(URL, currentUrl);
		   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		   sAssert.assertEquals(title, driver.getTitle().trim());
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

	@Then("^Title on HonmePage is Free CRM$")
	public void title_on_HonmePage_is_Free_CRM() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		sAssert.assertEquals(driver.getTitle().trim(), "CRM");
	}


	@When("^User should click Contacts link$")
	public void user_should_click_Contacts_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[@href='/contacts']")).click();
	}
	
	@Then("^User should navigate to Contacts page$")
	public void user_should_navigate_to_Contacts_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals("https://ui.freecrm.com/contacts", driver.getCurrentUrl().trim());
	}
	
	
	
	
	@Then("^User should see Contact page details displayed completely$")
	public void user_should_see_Contact_page_details_displayed_completely() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ContactHeader= driver.findElement(By.xpath("//thead[@class='full-width']//tr"));
		WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOf(ContactHeader));
	
	}
	
	
	@When("^User click New Button$")
	public void user_click_New_Button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	}
 	
	//List<WebElement> ContactHeaderList=driver.findElements(By.xpath("//thead[@class='full-width']//tr/th"));
	@When("^Enter \"([^\"]*)\" and \"([^\"]*)\"  and \"([^\"]*)\" then click Save$")
	public void enter_and_and_then_click_Save(String firstName, String lastName, String emailId) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 	driver.findElement(By.name("first_name")).sendKeys(firstName);;
		driver.findElement(By.name("last_name")).sendKeys(lastName);;
		driver.findElement(By.xpath("//div[@class='field']//label[contains(text(),'Email')]/following-sibling::div//input[1]")).sendKeys(emailId);
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[contains(text(),'Save')]"));
		 driver.manage().timeouts().implicitlyWait(6, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='/contacts']")).click();
		Thread.sleep(5000);
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
