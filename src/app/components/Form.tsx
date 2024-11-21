'use client'
import IgForm from '@/app/components/IgForm'
import { memo, useState } from 'react'
import { ResourceInfo } from '@/types'
import { toCorsUrl } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

const LongPressSave = memo((props: { href: string }) => (
  <a href={props.href} download>
    <Badge>Long Press Save</Badge>
  </a>
))

export default function Form() {
  const [resourceInfo, setResourceInfo] = useState<ResourceInfo[]>([])

  return (
    <>
      <IgForm onGetData={setResourceInfo} />
      <div className="flex flex-col  gap-y-4 mt-8">
        {resourceInfo.map((info, i) => {
          if (info.type === 'Image') {
            return (
              <div key={i}>
                <img
                  key={i}
                  src={toCorsUrl(info.url)}
                  className="object-contain w-full h-[400px]"
                  alt=""
                />
                <LongPressSave href={info.url} />
              </div>
            )
          } else if (info.type === 'Video') {
            return (
              <div key={i}>
                <video
                  className="w-full h-[400px] rounded-b"
                  controls
                  playsInline={true}
                  preload="metadata"
                  muted
                  loop={true}
                >
                  <source src={info.url} type="video/mp4" />
                </video>
                <LongPressSave href={info.url} />
              </div>
            )
          }
        })}
      </div>
    </>
  )
}
