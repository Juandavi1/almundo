import { NestFactory } from '@nestjs/core';
import {ApplicationModule} from "./modules/app.module";
import * as cors from 'cors'
import * as helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  app.use(helmet());
  await app.listen(7777);
}
bootstrap();

