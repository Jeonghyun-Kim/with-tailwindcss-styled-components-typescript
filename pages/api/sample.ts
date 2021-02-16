import { NextApiRequest, NextApiResponse } from 'next';
import withErrorHandler from '@utils/withErrorHandler';

const handler: (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void> = async (req, res) => {
  if (req.method === 'GET') {
    // Do something whatever you want

    // Making 1sec delay for better practice.
    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });

    return res.json({ data: { hello: 'world' } });
  }

  res.statusCode = 404;
  throw new Error('Method not found.');
};

export default withErrorHandler(handler);
