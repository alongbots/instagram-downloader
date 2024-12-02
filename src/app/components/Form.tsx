'use client'
import IgForm from '@/app/components/IgForm'
import { useState } from 'react'
import { ResourceInfo } from '@/types'
import { toCorsUrl } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'

function LongPressSave(props: { href: string }) {
  return (
    <a href={props.href} download>
      <Badge>Long Press Save</Badge>
    </a>
  )
}

export default function Form() {
  const [resourceInfo, setResourceInfo] = useState<ResourceInfo[]>([])
  const { toast } = useToast()

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      toast({
        description: 'Download Link has been copied to clipboard',
        action: <ToastAction altText="OK">OK</ToastAction>
      })
    } catch {
      toast({
        title: 'Error',
        description: 'Please allow clipboard access.',
        action: <ToastAction altText="OK">OK</ToastAction>
      })
    }
  }

  return (
    <>
      <IgForm onGetData={setResourceInfo} />
      <div className="flex flex-col  gap-y-4 mt-8">
        {resourceInfo.length > 0 && (
          <Button
            variant="ghost"
            className="ml-auto"
            size="icon"
            onClick={() => copyLinkToClipboard()}
          >
            <ExternalLink />
          </Button>
        )}
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
