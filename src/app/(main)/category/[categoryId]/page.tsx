import Image from "next/image"

export default async function page({ params }: { params: Promise<{ categoryId: string }> }) {

    const { categoryId } = await params

    return (
        <div>
            <p>{categoryId}</p>

            <br />

            <Image src={"/test.png"} alt="test" blurDataURL="/"  placeholder="blur" width={100} height={100}/>
        </div>
    )
}
