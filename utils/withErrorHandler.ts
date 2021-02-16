import { NextApiResponse } from 'next';

const withErrorHandler: (
  handler: (req: never, res: NextApiResponse) => void | Promise<void>,
) => (req: never, res: NextApiResponse) => Promise<void> = (handler) => {
  const newHandler = async (req: never, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(err);
      }
      return res.status(res.statusCode || 500).json({
        error: {
          code: err.code || -1,
          statusCode: res.statusCode || 500,
          message: err.message || 'Internal server error.',
        },
      });
    }
  };

  return newHandler;
};

export default withErrorHandler;
