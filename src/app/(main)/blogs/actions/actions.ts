'use server'

import { wait } from "@/utils/wait"
import { redirect } from "next/navigation"

export const createPost = async () => {
    let isCreated = false
    await wait(2500)

    isCreated = false

    if (!isCreated) {
        return { message: "post not created!" }
    }

    if (isCreated) {
        console.log("post created")
        redirect("/")
    }
}