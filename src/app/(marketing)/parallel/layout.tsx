import { ReactNode } from "react";

export default function layout({ children, analytics }: { children: ReactNode, analytics: ReactNode }) {
    return (
        <div>
            <h1>Parallel layout</h1>

            {children}
            {analytics}
        </div>
    )
}
