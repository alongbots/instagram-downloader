import { NextRequest, NextResponse } from 'next/server'
import Ig from '@/core/Ig'
import { AxiosError } from 'axios'
import { isValidIgUrl } from '@/lib/utils'
import { POST_URL_PARAMS } from '@/lib/constant'

export async function GET(req: NextRequest) {
  const postUrl = req.nextUrl.searchParams.get(POST_URL_PARAMS)
  if (!isValidIgUrl(postUrl)) {
    return NextResponse.json(
      {
        message: 'Not a valid Instagram share link.'
      },
      { status: 400 }
    )
  }
  try {
    const ig = new Ig(postUrl as string)
    const info = await ig.getData()
    return NextResponse.json(
      {
        data: info
      },
      { status: 200 }
    )
  } catch (e) {
    return NextResponse.json(
      {
        message: (e as AxiosError).message
      },
      { status: 500 }
    )
  }
}
