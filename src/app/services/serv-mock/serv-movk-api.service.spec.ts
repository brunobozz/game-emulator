import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ServMovkApiService } from './serv-movk-api.service';

describe('ServMovkApiService', () => {
  let service: ServMovkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ServMovkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
