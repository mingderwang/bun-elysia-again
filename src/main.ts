import { serve } from "bun";

serve({
  fetch(request) {
    return new Response("Hello, world!");
  },
  port: 3000,
});

console.log("Server running on http://localhost:3000");

