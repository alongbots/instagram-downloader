'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import axios from 'axios'
import { ResourceInfo } from '@/types'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ToastAction } from '@/components/ui/toast'

export default function IgForm({
  onGetData
}: {
  onGetData?: (res: ResourceInfo[]) => void
}) {
  const [postUrl, setPostUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const getIgInfo = async () => {
    try {
      setLoading(true)
      const res = await axios({
        url: `/api/ig/?postUrl=${encodeURIComponent(postUrl)}`,
        method: 'get'
      })
      if (res.status !== 200) {
        toast({
          title: 'Error',
          description: res.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>
        })
        return
      }
      onGetData?.(res.data.data)
    } catch (e) {
      console.log(e)
      toast({
        title: 'Error',
        description: e?.response?.data?.message ?? e.toString(),
        action: <ToastAction altText="Try again">Try again</ToastAction>
      })
    } finally {
      setLoading(false)
    }
  }

  const onClear = () => {
    setPostUrl('')
  }

  const onPaste = async () => {
    const text = await navigator.clipboard.readText()
    setPostUrl(text)
  }
  return (
    <>
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Paste Instagram Link here"
          value={postUrl}
          onChange={(e) => setPostUrl(e.target.value)}
        />
        {postUrl && <Button onClick={onClear}>Clear</Button>}
        {!postUrl && <Button onClick={onPaste}>Paste</Button>}
      </div>
      <Button className="mt-4" onClick={getIgInfo} disabled={loading}>
        {loading && <Loader2 className="animate-spin" />}
        Download
      </Button>
    </>
  )
}
