package steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ViewPostsSteps {
	
	WebDriver driver;
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\ViewForum\\ViewForum\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
		
		//login
		driver.get("http://20.52.44.20/auth/login");
	    driver.findElement(By.id("InputEmail")).sendKeys("testing.amalitech@gmail.com");
	    driver.findElement(By.id("InputPassword1")).sendKeys("12345678!Aa");
	    driver.findElement(By.id("signin_button")).click();

	}

	@After()
	public void end() {
		driver.manage().deleteAllCookies();
		driver.quit();
	}
	
	@Given("^user navigates to the forum$")
	public void user_navigates_to_the_forum() throws Throwable {
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//*[@id=\"__next\"]/div[1]/div/div[1]/div/div/div[2]/a[3]/span")).click();  
	}

	@Then("^User should see all the posts$")
	public void user_should_see_all_the_posts() throws Throwable {
		//check for current URL
		Thread.sleep(2000);
	    String url = driver.getCurrentUrl();
	    Assert.assertEquals(url, "");
	}

	@Then("^user should be able to vote or comment on a post$")
	public void user_should_be_able_to_vote_or_comment_on_a_post() throws Throwable {
		//Vote
		Thread.sleep(2000);
	    driver.findElement(By.xpath("")).click();
	    //comment
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("")).sendKeys("Wow. An interesting story");
	}


}
