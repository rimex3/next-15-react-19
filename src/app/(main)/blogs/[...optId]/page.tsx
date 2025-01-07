
export default async function page({ params }: { params: Promise<{ optId: string }> }) {
    const { optId } = await params
    return (
        <div>page: {optId}</div>
    )
}
