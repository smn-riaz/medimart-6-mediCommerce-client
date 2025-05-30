export const dynamic = "force-dynamic";


import AdminManageOrders from '@/components/dashboard/admin/orders/AdminManageOrders';
import { getAllOrder } from '@/services/order';
import React from 'react';

const OrdersPage = async () => {
    const {data} =  await getAllOrder()

    return (
        <div className='w-full'>
        <AdminManageOrders data={data}/>
      </div>
    );
};

export default OrdersPage;