import type { APIRoute } from "astro";

export const prerender = false;

export async function POST({ request }: any) {
    console.log(request.body);
    
    return new Response(JSON.stringify({ message: "Login successful" }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}