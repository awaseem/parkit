import type { NextApiRequest, NextApiResponse } from 'next'
import { getRate } from '../../models/rate'
import { createBuyTicketSession } from '../../models/ticket'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })    
    return
  }

  const incomingData = req.body

  const sessionUrl = await createBuyTicketSession(incomingData.rateId, incomingData.licensePlate)
  res.status(200).send({ url: sessionUrl })
}
