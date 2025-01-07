import Link from "next/link";

export default function page() {
    return (
        <div>
            <p>catgory</p>
            <Link prefetch href={`/category/43543534534`} style={{ color: "blue" }}>
                Take me dynmaic
            </Link>
        </div>
    )
}
