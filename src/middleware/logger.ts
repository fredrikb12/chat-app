import { Request, Response, NextFunction } from 'express';

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.path}`);
  next();
}

export default loggerMiddleware;
