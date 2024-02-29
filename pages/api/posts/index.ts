import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | {
          data: any[]
          pagination: any
      }
    | { name: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'GET') {
        return res.status(404).json({ name: 'method not supported' })
    }

    const baseUrl = 'https://js-post-api.herokuapp.com/api'

    const response = await fetch(baseUrl + '/posts?_page=1&_limit=10')

    console.log('response: ', response)

    const responseJSON = await response.json()

    res.status(200).json(responseJSON)
}
