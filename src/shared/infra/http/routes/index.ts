import { Router } from 'express';

import userRouter from '../../../../modules/users/infra/http/routes/index';

const routes = Router();

routes.use('/user', userRouter);

export default routes;
