import { NextRequest, NextResponse } from 'next/server'
import Ig from '@/core/Ig'

export async function GET(req: NextRequest) {
  const postUrl = req.nextUrl.searchParams.get('postUrl')
  const validUrlReg =
    /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv)\/[a-zA-Z0-9_\-]+(\/(\?[^#]*)?)?(#.*)?$/
  if (!postUrl || !validUrlReg.test(postUrl)) {
    return NextResponse.json(
      {
        message: 'Not a valid Instagram share link.'
      },
      { status: 400 }
    )
  }
  try {
    const ig = new Ig(postUrl)
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
        message: e
      },
      { status: 500 }
    )
  }
}
