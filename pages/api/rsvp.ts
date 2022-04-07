import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { first, last, attending, email, meal, kids } = req.body;
    if (req.method == 'POST') {
        try {
            const createGuest = await prisma.guest.create({
                data: {
                    first: first,
                    last: last,
                    attending: attending,
                    email: email,
                    meal: meal,
                    kids: kids
                }
            })
            res.status(202).json({ success: createGuest})
        } catch(error) {
            res.status(403).json({ dberror: error})
        }
    } else {
        res.status(404)
    }
}
