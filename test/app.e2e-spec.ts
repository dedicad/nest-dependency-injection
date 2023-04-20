import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { Service } from '../src/app.service';

describe('NestJS DI', () => {
  it('should inject dependency', async () => {
    const app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    await app.init();

    const service = app.get(Service);

    expect(service).toBeInstanceOf(Service);
    expect(service.dep).not.toBeUndefined();
    await app.close();
  });
});
