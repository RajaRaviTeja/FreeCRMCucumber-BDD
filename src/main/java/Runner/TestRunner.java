package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun=false,
		strict=true,
		monochrome=true,
		features = "src/main/java/Features/deals.feature",
		glue={"stepDefinations"}
		,plugin={"pretty","html:test-output/cucumber.html","json:json-output/cucumber.json","junit:junit-output/cucumber.xml"}
		)

public class TestRunner {
	
}
