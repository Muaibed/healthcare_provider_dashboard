import Image from "next/image"

export function RoundedImage({width, height, imagePath}: {width: number, height: number, imagePath: string}) {
    return (
        <div className="flex justify-center items-center">
            <div className="rounded-full overflow-hidden">
            <Image src={imagePath} alt="Image" height={height} width={width} className="object-cover" />
            </div>
        </div>
    )
}