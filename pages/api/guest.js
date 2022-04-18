import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { first, last, attending, email, kids, meal} = req.body;
  if (req.method == 'POST') {
    try {
      const result = await prisma.guest.create({
        data: {
          first: first,
          last: last,
          attending: attending,
          email: email,
          kids: kids,
          meal: meal
        },
      })
      res.json({ success: result })
    } catch (error) {
      res.json({ problem: error })
    }
  } else {
    res.json({ message: "This method is not allowed" })
  }
  
  
}