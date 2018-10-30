"use strict";

const { When, Then } = require("cucumber");

var assert = require("cucumber-assert");

When(/^I type query as "([^"]*)"$/, { timeout: 60 * 1000 }, async function(
  searchQuery
) {
  const { By } = webdriver;
  await driver.get("https://www.google.com/ncr");
  return driver.findElement(By.name("q")).sendKeys(searchQuery);
});

Then(/^I submit$/, async function() {
  const { By } = webdriver;
  await driver.sleep(1000);
  await driver.findElement(By.css(".lsb")).click();
  await driver.sleep(2000);
  const count = await driver.findElements(By.id("top_nav")).length;
  if (count === 0) {
    throw new Error("element not present");
  }
});

Then(/^I should see title "([^"]*)"$/, async function(titleMatch) {
  const title = await driver.getTitle();
  await assert.equal(title, titleMatch, "Expected title to be " + titleMatch);
});
