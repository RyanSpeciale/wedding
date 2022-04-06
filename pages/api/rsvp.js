import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const { first, last, attending, email, meal, kids } = req.body;
    if (req.method == 'POST') {
        try {
            const result = await prisma.guest.create({
                data: {
                    first: first,
                    last: last,
                    attending: attending,
                    email: email,
                    meal: meal,
                    kids: kids
                }
            })
            res.status(202).json({ success: result})
        } catch(error) {
            res.status(403).json({ dberror: error})
        }
    } else {
        res.status(404)
    }
}
