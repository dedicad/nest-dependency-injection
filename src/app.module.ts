import { ClassProvider, Module } from '@nestjs/common';
import { DEP, Dep, Service } from './app.service';

const provider: ClassProvider = {
  provide: DEP,
  useClass: Dep,
};
provider;
@Module({
  imports: [],
  controllers: [],
  providers: [Service],
})
export class AppModule {}
