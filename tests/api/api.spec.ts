import { test, expect } from '@playwright/test'

test.describe.parallel('API tests', () => {
    const baseUrl = 'https://reqres.in/api'

    test('GET API test', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        expect(response.status()).toBe(200)
        const data = await response.json()
        expect(data).toHaveProperty('data.id', 2)
    })

    test('POST API test', async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                name: 'John Doe',
                job: 'Software Developer'
            }
        })
        expect(response.status()).toBe(201)

        const data = await response.json()
        expect(data.name).toBe('John Doe')
        expect(data.job).toBe('Software Developer')
    })

    test('PUT API test', async ({ request }) => {
        const response = await request.put(`${baseUrl}/users/2`, {
            data: {
                name: 'Jane Doe',
                job: 'Project Manager'
            }
        })
        expect(response.status()).toBe(200)

        const data = await response.json()
        expect(data.name).toBe('Jane Doe')
        expect(data.job).toBe('Project Manager')
    })

    test('DELETE API test', async ({ request }) => {
        const response = await request.delete(`${baseUrl}/users/2`)
        expect(response.status()).toBe(204)
    })
})