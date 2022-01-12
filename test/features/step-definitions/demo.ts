import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    
    await browser.maximizeWindow()
    await browser.url("https://www.google.com")
    await browser.pause(1000)
});

When(/^Search with (.+)$/, async function (searchItem) {

    let ele = await $('//input[@name="q"]')
    await ele.setValue(searchItem)
    await browser.keys(	"Enter")
});

Then(/^Click on the first search result$/, async function () {

    let ele = await $('(//div[@class="TbwUpd NJjxre"])[1]')
    await ele.click()
});

Then(/^URL should match (.+)$/, async function (expectedURL) {
    
    let actualUrl = await browser.getUrl()
    chai.expect(actualUrl).to.equal(expectedURL)
    console.log(await browser.getTitle())
    
});    
    
    



