import type { NextApiRequest, NextApiResponse } from 'next'
import { getRate } from '../../models/rate'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })    
    return
  }

  const incomingData = req.body
  
  console.log(incomingData)
}
