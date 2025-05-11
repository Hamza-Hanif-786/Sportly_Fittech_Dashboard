import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full bg-biscuit rounded-4xl shadow">
      <h1 className="text-2xl font-bold text-center">Welcome to the Admin Dashboard</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
          <Icon icon="mage:dashboard" className="text-gray-500" height={40} width={40} />
        </div>
        <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
          <Icon icon="mage:inbox" className="text-gray-500" height={40} width={40} />
        </div>
        <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
          <Icon icon="mage:users" className="text-gray-500" height={40} width={40}/>
        </div>
        <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
          <Icon icon="mage:settings" className="text-gray-500" height={40} width={40}/>
        </div>
      </div>
    </div>
  );
}
