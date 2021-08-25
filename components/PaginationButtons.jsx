import {useRouter} from 'next/router';
import Link from 'next/link'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/solid"

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) ||0;
  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {
        startIndex >= 10 && (
          <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`} passHref> 
            <div className="flex items-center flex-col flex-grow cursor-pointer, hover:text-blue-700">
            <ChevronDoubleLeftIcon className="h-5"/> <p>Previous</p>
            </div>
          </Link>
        )}
        <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`} passHref>
          <div className="flex items-center flex-col flex-grow cursor-pointer, hover:text-blue-700">
            <ChevronDoubleRightIcon className="h-5"/> <p>Next</p>
          </div>
        </Link>   
      
    </div>
  )
}

export default PaginationButtons;
