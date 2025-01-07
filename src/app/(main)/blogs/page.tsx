import Client from "./client"

const getBlogs = async () => {

    const data = await fetch('https://api.vercel.app/blog')
    const blogs = await data.json()

    return blogs
}

export default async function page() {
    const blogs = getBlogs()

    return (
        <ul>
            <Client blogs={blogs} />
        </ul>
    )
}
