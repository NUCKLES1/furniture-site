import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import {GithubAccessTokenEmail} from '../../components/Email-Template'


export async function GET() {
    const resend = new Resend(process.env.RESEND_API_KEY)

    
    try {
        const { data }  = await resend.emails.send({
        from: 'danyxcharge@example.com',
        to: 'danyxcharge@gmail.com',
        subject: 'i love you bro',
        react: GithubAccessTokenEmail({ username: 'zeno' })
        })
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

