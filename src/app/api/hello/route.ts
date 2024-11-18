import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ data: 'hello world' }, { status: 200 })
}