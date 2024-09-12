import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .get('/', () => 'Hi')
    .post('/hi', () => 'From Post')
    .put('/hi', () => 'From Put')
    .route('M-SEARCH', '/hi', () => 'Custom Method')
    .use(swagger())
    .listen(3000)