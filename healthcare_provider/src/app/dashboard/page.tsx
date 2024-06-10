import { RoundedImage } from "@/components/RoundedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { Calendar } from "@/components/ui/calendar";
import { MedicationTable } from "@/components/MedicationTable";
import { InfoCard } from "@/components/InfoCard";
import { MedicalHistory } from "@/components/MedicationHistory";
import { TimeLine } from "@/components/TimeLine";


export const dynamic = "force-dynamic"

export default function Dashboard() {
  return ( <> 
  <Tabs defaultValue="MyProfile">
  <TabsContent value="MyProfile" className="">
    <div className="flex">
  <div className="flex-3"> 
        <div className="pt-5 pb-10">
            <h1 className="text-4xl font-bold text-dark-blue mb-5">Hello, [NAME]</h1> 
            <TabsList>
            <TabsTrigger value="MyProfile">My Profile</TabsTrigger>
            <TabsTrigger value="MyPlans">My Plans</TabsTrigger>
        </TabsList>
        </div>
        <div className="flex">
            <div className="grid grid-cols-4">
                <DashboardCard width="w-30" height="h-20" title="92" subtitle="kg" body="weight"/>
                <DashboardCard width="w-30" height="h-20" title="92" subtitle="" body="BMI"/>
                <DashboardCard width="w-30" height="h-20" title="92" subtitle="cm" body="Height"/>
                <DashboardCard width="w-30" height="h-20" title="92" subtitle="" body="Blood P"/>
            </div>
        </div>
        <div className="flex">
                <div className="flex pt-3 mr-2">
                    <div className="w-96 h-[42.3rem] rounded mr-2 bg-white">
                        <div className="flex p-2">
                            <div className="pl-5 pt-5">
                                <RoundedImage imagePath="/logo1.png" width={40} height={40}/>
                            </div>
                            <div className="pl-5 pt-6 text-lg font-bold italic">TimeLine</div>
                        </div>
                        <TimeLine />
                    </div>
                </div>
            <div>
                <div className="flex pt-3">
                    <div className="w-96 h-[21rem] bg-white rounded mr-2">
                    <div className="flex p-2">
                            <div className="pl-5 pt-5">
                                <RoundedImage imagePath="/logo1.png" width={40} height={40}/>
                            </div>
                        <div className="pl-5 pt-6 text-lg font-bold italic">Calendar</div>
                    </div>
                        <Calendar className="flex justify-center w-full"></Calendar>
                    </div>
                </div>
        <MedicalHistory />
            </div>
        </div>
    </div>
    <InfoCard />
    </div>
        <div>
            <div className="flex pt-3">
                <div className="w-full h-96 rounded mr-2 bg-white">
                    <div className="flex p-2">
                        <div className="pl-5 pt-5">
                            <RoundedImage imagePath="/logo1.png" width={40} height={40}/>
                        </div>
                        <div className="pl-5 pt-6 text-lg font-bold italic">Medication</div>
                    </div>
                    <div className="pl-20 pr-20">
                    <MedicationTable />
                    </div>
                </div>
            </div>
        </div>
  </TabsContent>
  <TabsContent value="MyPlans">My Plans</TabsContent>
</Tabs>
  </>
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
    return <Card className={`overflow-hidden ${width} ${height} flex mr-4`}>
        <div className="flex ml-4">
        <RoundedImage imagePath="/logo1.png" width={50} height={50} />
        </div>
        <div>
    <CardHeader className="flex flex-row mt-3.5 p-0 pl-4">
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

