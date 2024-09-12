import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger'

// Step 1: Create the Elysia app
const app = new Elysia()
  .get('/', () => 'Hello, Elysia with Bun serve!')
  .get('/json', () => ({ message: 'Elysia with Bun serve in JSON' }))
  .get('/hello/:name', ({ params }) => `Hello, ${params.name}!`)
  .use(swagger())
  .handle;

// Step 2: Start Bun's native HTTP server and delegate to Elysia
Bun.serve({
  port: 3000,
  fetch(req: Request) {
    return app(req); // Pass the request to Elysia's handler
  },
});

console.log('Bun server running with Elysia on http://localhost:3000');
