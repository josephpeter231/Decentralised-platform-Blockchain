import React from 'react'
import {  JobBid } from '../components'
import { useGlobalState } from '../store'
import Fheader from '../components/Fheader'

const MyJobs = () => {
  const [mygigs] = useGlobalState('mygigs')

  return (
    <>
      <Fheader />
      <div className="mt-11 px-4">
        <h3 className="text-xl px-4 my-4">
          {mygigs.length > 0
            ? 'Assigned Tasks.'
            : "You Don't Have Any Assigned task."}
        </h3>
        <div className="px-3">
          {mygigs.map((mygig, i) => (
            <JobBid key={i} jobListing={mygig} />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default MyJobs
