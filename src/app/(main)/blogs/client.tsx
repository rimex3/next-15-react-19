/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { use, useActionState } from "react"
import { createPost } from "./actions"

const initialValue = {
    message: ""
}

export default function Client({ blogs }: { blogs: any }) {
    const [state, formAction, pending] = useActionState(createPost, initialValue)
    console.log(state)
    const awaitedBlogs = use<{ title: string, id: string }[]>(blogs)
    return (
        <ul>

            <form action={formAction}>
                {state?.message && <p style={{ color: "red" }}>{state.message}</p>}
                <button style={{ color: "green" }} disabled={pending}>{pending ? "Creating..." : "Create Post"}</button>
            </form>


            {awaitedBlogs?.map((blog: any) => (
                <li key={blog.id}>{blog.title}</li>
            ))}
        </ul>
    )
}
