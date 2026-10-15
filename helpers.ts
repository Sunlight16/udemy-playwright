export async function loadHomePage(page: any) {
    await page.goto('https://www.saucedemo.com/')
}

export async function assertTitle(page: any) {
    await page.waitForSelector('.login_logo')
}