import express, { Request, Response } from 'express';
import { NotFoundError } from '@webmak/microservices-common';
import { Ticket } from '../models/Ticket';

const router = express.Router();

router.get('/api/tickets/:id', (req: Request, res: Response) => {
  const ticket = Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  return res.status(200).send(ticket);
});

export { router as showTicketRouter };