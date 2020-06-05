import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import PointsController from '../controllers/PointsController';
import validateCreatePoints from '../validators/CreatePoints';

const pointsRouter = Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();

pointsRouter.post(
  '/',
  upload.single('image'),
  validateCreatePoints,
  pointsController.create,
);
pointsRouter.get('/', pointsController.index);
pointsRouter.get('/:id', pointsController.show);

export default pointsRouter;
