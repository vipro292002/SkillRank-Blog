import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req: any, ev: any) {
    const { pathname,origin  } = req.nextUrl
    // middleware navigate from / -> /lastest
    if (pathname == '/') {
        return NextResponse.rewrite(`${origin}/blog/lastest`)
    }
    return NextResponse.next()
}