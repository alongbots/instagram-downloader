'use client'
import IgForm from '@/app/components/IgForm'
import { useState } from 'react'
import { ResourceInfo } from '@/types'

export default function Form() {
  const [resourceInfo, setResourceInfo] = useState<ResourceInfo[]>([])
  return (
    <>
      <IgForm onGetData={setResourceInfo} />
      <div className="flex flex-col  gap-y-4 mt-8">
        {resourceInfo.map((info, i) => {
          if (info.type === 'Image') {
            return (
              // <img
              //   key={i}
              //   src={info.url}
              //   className=" object-contain rounded-b w-full h-[400px]"
              //   alt=""
              //   crossOrigin="anonymous"
              // />
              <a href={info.url} target="_blank" className="truncate">
                {info.url}
              </a>
            )
          } else if (info.type === 'Video') {
            return (
              <video
                key={i}
                src={info.url}
                className="w-full h-[400px] rounded-b"
                controls
                autoPlay
              ></video>
            )
          }
        })}
      </div>
    </>
  )
}
