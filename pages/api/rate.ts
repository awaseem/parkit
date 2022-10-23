import type { NextApiRequest, NextApiResponse } from 'next'

const DAY_RATE = {
  id: '12EF',
  value: 20
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    rate: DAY_RATE
  })
}
