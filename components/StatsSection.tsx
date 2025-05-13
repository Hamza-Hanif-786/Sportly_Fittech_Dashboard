import React from 'react'
import StatsCard from './StatsCard'




const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full bg-biscuit rounded-4xl shadow mt-5">
      <StatsCard 
        title="Visits"
        percentage="+12%"
        progressValue={50}
      />
      <StatsCard 
        title="Sales"
        percentage="+12%"
        progressValue={50}
      />
      <StatsCard 
        title="Users"
        percentage="+12%"
        progressValue={50}
      />
      <StatsCard 
        title="Revenue"
        percentage="+12%"
        progressValue={50}
      />
    </div>
  )
}

export default StatsSection