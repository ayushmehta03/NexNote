import { cn, getSubjectColor } from "@/lib/utils";
import { Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow } from "./ui/table"
import Link from "next/link";
import Image from "next/image";

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
 <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{
  backgroundColor:getSubjectColor(companion.subject)
 }}>
  <Image 
  src={`/icons/${companion.subject}.svg`}
  height={35}
  width={35}
  alt="subject-image"
  
  
  />
 </div>
 <div className="flex flex-col gap-2">
<p className="font-bold text-2xl">
  {companion.name}
</p>
<p className="text-lg">
  {companion.topic}
</p>
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