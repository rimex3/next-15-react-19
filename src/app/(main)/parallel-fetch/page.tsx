// import { Suspense } from "react";


// async function getUsers() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
//     return res.json() as Promise<{ id: number }[]>
// }

// async function getPosts() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     return res.json()
// }
// export default async function page() {
//     const userData = getUsers()
//     const postsData = getPosts();
//     const [user, posts] = await Promise.all([userData, postsData])
//     console.log(user)

//     return (
//         <div>
//             <h2>sequential</h2>
//             <br />
//             <Suspense fallback={<div>loading...</div>}>
//                 <Posts posts={posts} />
//             </Suspense>
//         </div>
//     )
// }


// async function Posts({ posts }: { posts: Awaited<ReturnType<typeof getPostsByUser>> }) {
//     return (
//         <div>
//             <h3>Posts</h3>
//             {posts.map((post) => (
//                 <div key={post.id}>
//                     <h4>{post.title}</h4>
//                     <p>{post.body}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

import React from 'react'

export default function page() {
    return (
        <div>page</div>
    )
}
