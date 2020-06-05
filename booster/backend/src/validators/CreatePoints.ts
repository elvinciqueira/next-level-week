import { Joi, Segments, celebrate } from 'celebrate';

export default celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      uf: Joi.string().required(),
      city: Joi.string().required().max(2),
      items: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
  },
);
