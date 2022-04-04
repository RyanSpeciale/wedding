import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const client: PrismaClient = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { first, last, email, kids, meal, attending } = req.body; 
    try {
        const result = await client.guest.create({
            data: {
              first: first,
              last: last,
              email: email,
              kids: kids,
              meal: meal,
              attending: attending  
            }
        });
        res.json(result)
    } catch (error) {
        res.json({ error: error })
    }
}