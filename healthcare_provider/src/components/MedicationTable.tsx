import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function MedicationTable() {
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
                        Medication Name
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-green-100 text-green-600">
                        <div className="flex justify-center">
                            Active
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        25 mg
                    </TableCell>
                    <TableCell>
                        Once Daily
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        Dr. Johnson
                    </TableCell>
                    <TableCell>
                        3/10/2024
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        -
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                        Medication Name
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-red-100 text-red-600">
                        <div className="flex justify-center">
                            Discontinued
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        25 mg
                    </TableCell>
                    <TableCell>
                        Once Daily
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        Dr. Johnson
                    </TableCell>
                    <TableCell>
                        3/10/2024
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        7/12/2024
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                        Medication Name
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-blue-100 text-blue-600">
                        <div className="flex justify-center">
                            On Hold
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        25 mg
                    </TableCell>
                    <TableCell>
                        Once Daily
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        Dr. Johnson
                    </TableCell>
                    <TableCell>
                        -
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        -
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="bg-blue-600/[.06]">
                        Medication Name
                    </TableCell>
                    <TableCell>
                    <div className="px-4 py-1 bg-green-100 text-green-600">
                        <div className="flex justify-center">
                            Active
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        25 mg
                    </TableCell>
                    <TableCell>
                        Once Daily
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        Dr. Johnson
                    </TableCell>
                    <TableCell>
                        3/10/2024
                    </TableCell>
                    <TableCell className="bg-blue-600/[.06]">
                        -
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}