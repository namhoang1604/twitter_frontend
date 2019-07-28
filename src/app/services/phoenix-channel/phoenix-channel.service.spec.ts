import { TestBed } from '@angular/core/testing';

import { PhoenixChannelService } from './phoenix-channel.service';

describe('PhoenixChannelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoenixChannelService = TestBed.get(PhoenixChannelService);
    expect(service).toBeTruthy();
  });
});
