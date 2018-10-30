const { Given, Then } = require("cucumber");
const assert = require("cucumber-assert");

Given("I go to {string}", async url => {
  await driver.get(url);
});

Then("I check if {string} pub id is in page", async sas_id => {
  const { By } = webdriver;
  await driver.findElement(By.css(`#sas_${sas_id}`));
});

Then("{string} must have {string} id's", async (objectName, listId) => {
  const ids = listId.split(",");

  const formatIds = await driver.executeScript(
    `return ${objectName}.formatIds;`
  );
  const formatIdsList = formatIds.split(",");

  await Promise.all(
    ids.map(async id => assert.notEqual(formatIdsList.indexOf(id), -1))
  );
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
