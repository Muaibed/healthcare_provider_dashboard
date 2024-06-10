import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"

export function AvatarComp({width, height, imagePath}: {width: number, height: number, imagePath: string}) {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center rounded-full overflow-hidden">
            <Image src={imagePath} alt="Image" height={width} width={height} className="object-cover" />
            </div>
        </div>
    )
}

export function RoundedImage({imagePath}: {imagePath: string}) {
    return (
        <div className="flex justify-center items-center">
        <Avatar className="flex justify-center items-center bg-blue-200">
            <AvatarImage className="h-4 w-4" src={imagePath}></AvatarImage>
          </Avatar>
        </div>
    )
}