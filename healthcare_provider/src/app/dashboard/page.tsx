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
        <div className="-my-6 pt-7">
            <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
                <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">Jun, 2024</div>
                </div>
                </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>
    
    <div className="relative pl-8 sm:pl-32 py-6 group bg-blue-600/[.06]">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
            <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">Jun, 2024</div>
                </div>
            </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>
    
    <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
            <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">Jun, 2024</div>
                </div>
            </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group bg-blue-600/[.06]">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
            <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">2022</div>
                </div>
            </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
            <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">Jun, 2024</div>
                </div>
            </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group bg-blue-600/[.06]">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600">
            <div className="text-md">
                <div className="flex justify-center">12Wed</div>
                <div className="flex justify-center">Jun, 2024</div>
                </div>
            </time>
            <div className="text-sm font-bold text-slate-900">Pre diabetic</div>
        </div>
        <div className="text-slate-500 text-[11px]">Alc:10.4</div>
    </div>
</div>
    )
}

function MedicalHistory() {
    return (
        <div className="flex pt-3">
            <div className="w-96 h-[20.5rem] bg-white rounded mr-2">
                <div className="flex p-2">
                    <div className="pl-5 pt-5">
                        <RoundedImage imagePath="/logo1.png" width={40} height={40}/>
                    </div>
                    <div className="pl-5 pt-6 text-lg font-bold italic">Medical History
                    </div>
                </div>
                <div className="flex p-2">
                    <div className="pl-5 pt-3">
                        <RoundedImage imagePath="/logo1.png" width={30} height={30}/>
                    </div>
                    <div className="pt-3 pl-3">
                        <div className="font-bold text-sm">Chronic Disease</div>
                        <div className="text-gray-300 text-[11px]">Diabetes, Hypertension, Asthma, Neurological Disorders</div>
                    </div>
                </div>
                <div className="flex p-2 bg-blue-600/[.06]">
                    <div className="pl-5 pt-3">
                        <RoundedImage imagePath="/logo1.png" width={30} height={30}/>
                    </div>
                    <div className="pt-3 pl-3">
                        <div className="font-bold text-sm">Chronic Disease</div>
                        <div className="text-gray-300 text-[11px]">Diabetes, Hypertension, Asthma</div>
                    </div>
                </div>
                <div className="flex p-2">
                    <div className="pl-5 pt-3">
                        <RoundedImage imagePath="/logo1.png" width={30} height={30}/>
                    </div>
                    <div className="pt-3 pl-3">
                        <div className="font-bold text-sm">Chronic Disease</div>
                        <div className="text-gray-300 text-[11px]">Diabetes, Hypertension, Asthma</div>
                    </div>
                </div>
            </div>
        </div>
    )
}