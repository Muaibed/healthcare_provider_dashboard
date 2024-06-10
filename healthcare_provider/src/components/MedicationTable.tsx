'use client'

import { useUserStore } from "@/app/store_provider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export const MedicationTable = () => {
    const { medication } = useUserStore(
          (state) => state,
        )
        return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Medication Name</TableHead>
                    <TableHead>Status</TableHead>                   <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Prescribing Physician</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                        {medication[0].name}
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-green-100 text-green-600">
                        <div className="flex justify-center">
                        {medication[0].status}
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].dosage}
                    </TableCell>
                    <TableCell>
                        Once Daily
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].physician}
                    </TableCell>
                    <TableCell>
                    {medication[0].startDate}
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        -
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].name}
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-red-100 text-red-600">
                        <div className="flex justify-center">
                            Discontinued
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].dosage}
                    </TableCell>
                    <TableCell>
                    {medication[0].frequency}
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].physician}
                    </TableCell>
                    <TableCell>
                    {medication[0].startDate}
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].endDate}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].name}
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-blue-100 text-blue-600">
                        <div className="flex justify-center">
                            On Hold
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].dosage}
                    </TableCell>
                    <TableCell>
                    {medication[0].frequency}
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                    {medication[0].physician}
                    </TableCell>
                    <TableCell>
                        -
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        -
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
