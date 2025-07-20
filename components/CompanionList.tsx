import { cn } from "@/lib/utils";
import { Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow } from "./ui/table"
import Link from "next/link";

interface CompanionsListProps{
  title:string;
  companions?:Companion[];
  classNames:string
}
const CompanionList = ({title,companions,classNames}:CompanionsListProps) => {
  return (
    <article className={cn( 'companion-list',classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="text-lg w-2/3">Lessons</TableHead>
      <TableHead className="text-lg">Subject</TableHead>
      <TableHead className="tetx-lg text-right">Duration</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {companions?.map((companion)=>(
 <TableRow key={companion.id}>
<TableCell>
  <Link href={`/companions/${companion.id}`}>
  <div className="flex items-center gap-2">
 <div>
  
 </div>
  </div>
  </Link>

</TableCell>
 </TableRow>
    ))}
    </TableBody>
    </Table >
    </article>
  )
}

export default CompanionList;