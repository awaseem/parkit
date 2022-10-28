import type { NextApiRequest, NextApiResponse } from 'next'
import { getRate } from '../../models/rate'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    rate: getRate()
  })
}
