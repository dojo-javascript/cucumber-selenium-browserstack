const { Given, Then } = require("cucumber");

Given("I go to {string}", async url => {
  await driver.get(url);
});

Then("I check if {string} pub id is in page", async sas_id => {
  const { By } = webdriver;
  await driver.findElement(By.css(`#sas_${sas_id}`));
});

Then("I check that all sas declared in smart are present", async () => {
  const { By } = webdriver;
  const value = await driver.executeScript("return smartAdMetaData.formatIds;");

  const sasList = value.split(",");

  await Promise.all(
    sasList.map(async sas_id => {
      await driver.takeScreenshot();
      return driver.findElement(By.css(`#sas_${sas_id}`));
    })
  );
});
