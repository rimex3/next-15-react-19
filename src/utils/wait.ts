
export async function wait(duration: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(1), duration)
    })
}