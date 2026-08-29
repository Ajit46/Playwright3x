const {test,expect} = require('@playwright/test');

test('demo1', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    expect(await page.title()).
    toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');

})