import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('ClientController', () => {
  let controller: ClientController;

  /*since we are using the repository pattern we have to make sure that all deps are mocked
    make a mockService and then use overrideProvider and provide it as an argument to it
    Next use the mockService as an argument to the chained useValue*/
  const mockClientService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    })
      .overrideProvider(ClientService)
      .useValue(mockClientService)
      .compile();

    controller = module.get<ClientController>(ClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a client', () => {
    expect(
      controller.createClient({
        firstName: 'Steven',
        lastName: 'Stout',
        email: 'email@createme.com',
        password: 'hey12345SD$F.',
      }),
    ).toEqual({
      firstName: 'Steven',
      lastName: 'Stout',
      email: 'email@createme.com',
      password: 'hey12345SD$F.',
    });

    expect(mockClientService.create).toHaveBeenCalledWith({
      firstName: 'Steven',
      lastName: 'Stout',
      email: 'email@createme.com',
      password: 'hey12345SD$F.',
    });
  });
});
