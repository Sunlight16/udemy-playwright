import { test, expect } from '@playwright/test'

test.describe.only('Tips tests', () => {
    test('TestInfo Object', async ({ page }, testInfo) => {
        await page.goto('https://www.saucedemo.com/')
        console.log(testInfo.expectedStatus)
    })

    test('Test Skip Browser', async ({ page, browserName }) => {

        test.skip(browserName === 'chromium', 'Skipping this test intentionally for Chromium')
        await page.goto('https://www.saucedemo.com/')

    })

    test('Test Fixme Browser', async ({ page, browserName }) => {
        test.fixme(browserName === 'chromium', 'test is not stable, needs revision')
        await page.goto('https://www.saucedemo.com/')
    })

    const people = ["Alice", "Bob", "Charlie"]
    for (const person of people) {
        console.log(person)
        test(`Running test for "${person}"`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/')
            await page.fill('#user-name', person)
            await page.waitForTimeout(3000)
        })
    }

    test.only('Mouse movement', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/')
        await page.mouse.move(0, 0)
        await page.mouse.down()
        await page.mouse.up()
        await page.mouse.move(0, 100)
        await page.waitForTimeout(3000)
    })
})