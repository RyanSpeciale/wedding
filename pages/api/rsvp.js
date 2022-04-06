import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const { first, last, email, attending, meal, kids } = req.body;
    try {
        const result = await prisma.guest.create({
            data: {
                first: first,
                last: last,
                email: email,
                attending: attending,
                meal: meal,
                kids: kids
            }
        });
        res.json({ success: result });
    } catch(error) {
        res.status(402).json({ error: error })
    }
}
