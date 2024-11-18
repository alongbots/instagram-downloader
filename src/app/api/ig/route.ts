import {NextRequest, NextResponse} from "next/server";
import {ResponseData} from "@/types";



export function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {
  const postUrl = req.nextUrl.searchParams.get('postUrl')
  const validUrlReg = /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel|tv)\/[a-zA-Z0-9_\-]+(\/(\?[^#]*)?)?(#.*)?$/
  if(validUrlReg.test(postUrl)) {
    return res.json({
      message: 'Not a valid Instagram share link.'
    })
  }
}