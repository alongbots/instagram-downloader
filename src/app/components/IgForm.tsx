'use client'

import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import axios from 'axios'
import { ResourceInfo } from '@/types'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export default function IgForm({
  onGetData
}: {
  onGetData?: (res: ResourceInfo[]) => void
}) {
  const { setTheme } = useTheme()
  setTheme('dark')

  const [postUrl, setPostUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const getIgInfo = async () => {
    try {
      setLoading(true)
      const res = await axios({
        url: `/api/ig/?postUrl=${encodeURIComponent(postUrl)}`,
        method: 'get'
      })
      if (res.status !== 200) {
        toast(`Error: ${res.data.message}`)
        return
      }
      onGetData?.(res.data.data)
    } catch (e) {
      toast(`Error: ${e}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Input
        type="text"
        placeholder="Please Paste Ig Share Link"
        value={postUrl}
        onChange={(e) => setPostUrl(e.target.value)}
      />
      <Button className="mt-4" onClick={getIgInfo} disabled={loading}>
        {loading && <Loader2 className="animate-spin" />}
        Download
      </Button>
    </>
  )
}
