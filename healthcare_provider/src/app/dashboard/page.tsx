import { RoundedImage } from "@/components/RoundedImage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Calendar } from "@/components/ui/calendar";


export const dynamic = "force-dynamic"

export default function Dashboard() {
  return ( <> 
  <Tabs defaultValue="MyProfile">
  <TabsContent value="MyProfile" className="flex">
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
                <div className="flex pt-3">
                    <div className="w-96 h-[42rem] rounded mr-2 bg-white">
                        <div className="flex p-2">
                            <div className="pl-5 pt-5">
                                <RoundedImage imagePath="/logo1.png" width={40} height={40}/>
                            </div>
                            <div className="pl-5 pt-6 text-lg font-bold italic">TimeLine</div>
                        </div>
                        <TimeLine />
                    </div>
                </div>
        </div>
    </div>
    <InfoCard />
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

function InfoCard() {
    return ( 
    <div className="flex pt-20 mt-20">
    <div className="w-80 h-[48rem] bg-white rounded mr-4">
        <div className="w-full pt-10">
            <RoundedImage imagePath="/logo1.png" height={100} width={100} />
            <h3 className="flex justify-center pt-5">[Name]</h3>
        </div>
        <div className="grid grid-cols-2 pt-10 ">
            <div className="flex justify-center mb-10">
                <div>
                    <div className="flex justify-center">
                        [Gender]
                    </div>
                    <div className="text-gray-400">
                    Gender
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <div>
                    <div className="flex justify-center">
                        [Age]
                    </div>
                    <div className="text-gray-400">
                    Age
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center">
                        [Address]
                    </div>
                    <div className="text-gray-400">
                    Address
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center">
                        [Job]
                    </div>
                    <div className="text-gray-400">
                    Job
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-10">
            <div>
                <div className="font-bold pl-5 pb-3">
                    Contact Information
                </div>
                <div className="flex pl-10">
                    <FaPhoneAlt className="mr-5 text-gray-400"/>
                    [Contact Info]
                </div>
                <div className="flex pl-10">
                    <IoMail className="mr-5 text-gray-400"/>
                    [Mail]
                </div>
            </div>
        </div>
        <div className="pt-10">
            <div>
                <div className="font-bold pl-5 pb-3">
                    <div className="pb-2">
                        Own Diagnosis
                    </div>
                <div className="flex flex-wrap space-x-2">
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">Influenza</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">Gastroenteritis</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">Eczema</div>
                </div>
                </div>
            </div>
        </div>
        <div className="pt-10">
            <div>
                <div className="font-bold pl-5">
                    <div className="pb-2">
                        Health Barriers
                    </div>
                    <div className="flex space-x-2">
                    <div className="px-4 py-1 h-8 mb-1 bg-red-100 text-red-600 rounded-full">Fear of Insulin</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-red-100 text-red-600 rounded-full">Fear of Insulin</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

function TimeLine() {
    return ( 
      <div className="p-6 sm:p-10">
        <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
          <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
            <div className="font-medium">March 14, 2024 - Pre diabetic</div>
            <div className="text-gray-500 dark:text-gray-400">
              Alc:10.4
            </div>
          </div>
        </div>
      </div>
    )
}