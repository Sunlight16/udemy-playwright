import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from '../../helpers'


test.describe('My suite', () => {
    test('Sample basic test', async ({ page }) => {
        await loadHomePage(page)
        await assertTitle(page)
        const title = await page.locator('.login_logo')
        await expect(title).toContainText('Swag Labs')
    })
    test('Failure to login without providing credentials @negative', async ({ page }) => {
        await loadHomePage(page)
        await assertTitle(page)
        await page.click('#login-button')
        const errorMessage = await page.locator('[data-test="error"]')
        await expect(errorMessage).toContainText('Epic sadface: Username is required')
    })

    test('Successful login with username and password @positive', async ({ page }) => {
        await loadHomePage(page)
        await assertTitle(page)
        const usernameField = await page.locator('[data-test="username"]')
        await usernameField.fill('standard_user')
        const passwordField = await page.locator('[data-test="password"]')
        const passWElement = await page.$('[data-test="password"]')
        await passwordField.fill('secret_sauce')
        await passWElement?.screenshot({ path: 'passwordField.png' })
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
        await page.click('#login-button')
        const inventoryTitle = await page.locator('.title')
        await expect(inventoryTitle).toContainText('Products')
    })
})