import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  const data = await res.json();
  return NextResponse.json({ data })
}