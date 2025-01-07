export default async function page({ params }: { params: Promise<{ aboutId: string }> }) {
    const { aboutId } = await params
    console.log(aboutId)
    return (
        <div>page: {aboutId}</div>
    )
}
