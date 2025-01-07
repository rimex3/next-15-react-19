// import { Suspense } from "react";


// async function getUser(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     return res.json() as Promise<{ id: number }>
// }

// async function getPostsByUser(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//     return res.json()
// }


// export default async function page() {
//     const user = await getUser(1)

//     console.log(user.id)

//     return (
//         <div>
//             <h2>sequential</h2>
//             <Suspense>
//                 <Posts userID={user.id} />
//             </Suspense>
//         </div>
//     )
// }


// async function Posts({ userID }: { userID: number }) {
//     const posts = await getPostsByUser(userID);
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
