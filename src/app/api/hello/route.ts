import { NextResponse } from "next/server"
// import { getSession } from "next-auth/react"
import { getServerSession } from "next-auth"

export async function GET(req: Request){
    const session = await getServerSession({req})

    if( !session ) return NextResponse.json({message: 'User unauthorized'}, {status: 403})
    return NextResponse.json({message: 'hello world'}, {status: 200})
}