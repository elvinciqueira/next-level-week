import { Router } from 'express';

import ListItemsController from '../controllers/ListItemsController';

const itemsRouter = Router();

const listItemsController = new ListItemsController();

itemsRouter.get('/', listItemsController.index);

export default itemsRouter;
