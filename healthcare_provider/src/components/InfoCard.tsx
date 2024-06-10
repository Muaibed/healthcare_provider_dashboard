'use client'

import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AvatarComp, RoundedImage } from "./RoundedImage";
import { useUserStore } from "@/app/store_provider";

export const InfoCard = () => {
    const { name, age, gender, phone, address, job, email, ownDiagnosis, healthBarriers } = useUserStore(
      (state) => state,
    )
  
    return (
        <div className="flex pt-20 mt-20">
    <div className="w-80 h-[50rem] bg-white rounded mr-2">
        <div className="w-full pt-10">
            <AvatarComp width={128} height={128} imagePath="/avatarali.png"/>
            <h3 className="flex justify-center pt-5">{name}</h3>
        </div>
        <div className="grid grid-cols-2 pt-10 ">
            <div className="flex justify-center mb-10">
                <div>
                    <div className="flex justify-center">
                        {gender}
                    </div>
                    <div className="text-gray-400">
                    Gender
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <div>
                    <div className="flex justify-center">
                        {age}
                    </div>
                    <div className="text-gray-400">
                    Age
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center">
                        {address}
                    </div>
                    <div className="text-gray-400">
                    Address
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center">
                        {job}
                    </div>
                    <div className=" text-gray-400 pl-6">
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
                    {phone}
                </div>
                <div className="flex pl-10">
                    <IoMail className="mr-5 text-gray-400"/>
                    {email}
                </div>
            </div>
        </div>
        <div className="pt-10">
            <div>
                <div className="font-bold pl-5 pb-3">
                    <div className="pb-2">
                        Own Diagnosis
                    </div>
                <div className="flex flex-wrap">
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">{ownDiagnosis[0]}</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">{ownDiagnosis[1]}</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-blue-100 text-blue-600 rounded-full">{ownDiagnosis[2]}</div>
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
                    <div className="px-4 py-1 h-8 mb-1 bg-red-100 text-red-600 rounded-full">{healthBarriers[0]}</div>
                    <div className="px-4 py-1 h-8 mb-1 bg-red-100 text-red-600 rounded-full">{healthBarriers[0]}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
