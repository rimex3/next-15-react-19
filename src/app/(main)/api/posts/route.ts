

export async function GET() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()

    return Response.json({
        success: true,
        data: posts
    }, { status: 200 })
}