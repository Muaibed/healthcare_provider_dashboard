import { RoundedImage } from "@/components/RoundedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";


export const dynamic = "force-dynamic"

export default function Dashboard() {
  return (
    <div className="space-x-4">
    <div className="grid grid-cols-3 gap-4">
        <DashboardCard width="w-3/5" height="h-20" title="92" subtitle="kg" body="weight"/>
    </div>
    </div>
  ) 
}

type DashboardCardProps = {
    width: string
    height: string
    title: string
    subtitle: string
    body: string
}

function DashboardCard({width, height, title, subtitle, body}: DashboardCardProps) {
    return <Card className={`overflow-hidden ${width} ${height} flex`}>
        <div className="flex ml-4">
        <RoundedImage imagePath="/logo1.png" width={70} height={70} />
        </div>
        <div>
    <CardHeader className="flex flex-row items-center space-y-0 mt-3.5 p-0 pl-5">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm ml-2 text-gray-300" >{subtitle}</CardDescription>
        </CardHeader>
    <CardContent className="flex text-sm pl-4 text-gray-400">
        <p className="pr-1">{body}</p>
        <Indicator prev={10} current={20} />
    </CardContent>
        </div>
</Card>
}

function Indicator({prev, current}: {prev: number, current: number}) {
    if (current > prev) {
        return <div className="flex">
            <FaCaretUp className="text-green-500 mt-1"/>
            <p>10</p>
        </div>
    } else if (current < prev) {
        return <FaCaretDown className="text-red-500"/>
    }

    return <div className="flex">
        <HiMinus className="text-gray-500 mt-1" />
        <p className="">0</p>
        </div>
}