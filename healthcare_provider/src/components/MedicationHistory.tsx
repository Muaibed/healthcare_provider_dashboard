'use client'

import { useUserStore } from "@/app/store_provider";
import { RoundedImage } from "./RoundedImage";
import { Avatar, AvatarImage } from "./ui/avatar";

export const MedicalHistory = () => {
    const { medicalHistory } = useUserStore(
          (state) => state,
        )
        return (
        <div className="flex pt-3">
            <div className="w-96 h-[22.5rem] bg-white rounded mr-2">
                <div className="flex p-2">
                    <div className="pl-5 pt-5">
                        <RoundedImage imagePath="/medicalhistory.png"/>
                    </div>
                    <div className="pl-5 pt-6 text-lg font-bold italic">Medical History
                    </div>
                </div>
                <div className="flex p-2">
                    <div className="pl-5 pt-6">
                        <Avatar>
                            <AvatarImage src="/chronicdisease.png" className="w-4 h-4"/>
                        </Avatar>
                    </div>
                    <div className="pt-6 pl-3 pb-6">
                        <div className="font-bold text-sm">{medicalHistory[0].name}</div>
                        <div className="text-gray-300 text-[11px]">{medicalHistory[0].description}</div>
                    </div>
                </div>
                <div className="flex p-2 bg-blue-600/[.06]">
                    <div className="pl-5 pt-3">
                    <Avatar>
                            <AvatarImage src="/chronicdisease.png" className="w-4 h-4"/>
                        </Avatar>
                    </div>
                    <div className="pt-3 pl-3 pb-6">
                        <div className="font-bold text-sm">{medicalHistory[0].name}</div>
                        <div className="text-gray-300 text-[11px]">{medicalHistory[0].description}</div>
                    </div>
                </div>
                <div className="flex p-2">
                    <div className="pl-5 pt-3">
                    <Avatar>
                            <AvatarImage src="/chronicdisease.png" className="w-4 h-4"/>
                        </Avatar>
                    </div>
                    <div className="pt-3 pl-3">
                        <div className="font-bold text-sm">{medicalHistory[0].name}</div>
                        <div className="text-gray-300 text-[11px]">{medicalHistory[0].description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}