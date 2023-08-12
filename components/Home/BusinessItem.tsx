import { BusinessType } from '@/types'
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

function BusinessItem({ business }: { business: BusinessType}) {
  return (
    <div className='w-[180px] flex-shrink-0 m-2 p-2 bg-white rounded-lg cursor-pointer shadow-md'>
      <Image src={business.icon} alt={business.name} className='rounded-lg' width={180} height={80}/>
      <div className='p-2'>
        <h2 className='font-bold'>{business.name}</h2>
        <p className='text-xs text-gray-500'>{business.address}</p>
        <div className='flex gap-2 items-center'>
          <BsStarFill size={15} color="gold"/>
          <h3 className='font-bold text-gray-800'>{business.rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default BusinessItem
