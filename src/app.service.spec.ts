import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHomepage', () => {
    it('should return welcome message', () => {
      const result = service.getHomepage();
      expect(result).toBe('Welcome to Tatu homepage!');
    });

    it('should return a string', () => {
      const result = service.getHomepage();
      expect(typeof result).toBe('string');
    });
  });
});
