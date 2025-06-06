import SellerDashboard from '@/components/SellerDashboard';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

const SellerPage = async () => {
  const {userId} = await auth();
  if(!userId) redirect("/");

  return (
    <div className='min-h-screen bg-gray-50'> 
        <SellerDashboard />
    </div>
  )
}

export default SellerPage