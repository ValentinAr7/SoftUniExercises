const { chromium } = require ('playwright-chromium');
const { expect } = require ('chai');

let browser, page;

describe('E2E tests',async function() {
    this.timeout(5000);

    before (async () => {browser = await chromium.launch(); })
    after (async () => { await browser.close(); });
    beforeEach (async () => { page = awaitbrowser.newPage(); })
    afterEach(async () => {await page.close(); })

    it('loads articles titles', async () => {
        await page.goto('http://localhost:3030')
        await page.screenshot({path: 'page.png'})
    }) 

})