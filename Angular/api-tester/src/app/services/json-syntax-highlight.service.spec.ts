import { TestBed, inject } from '@angular/core/testing';

import { JsonSyntaxHighlightService } from './json-syntax-highlight.service';

describe('JsonSyntaxHighlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonSyntaxHighlightService]
    });
  });

  it('should be created', inject([JsonSyntaxHighlightService], (service: JsonSyntaxHighlightService) => {
    expect(service).toBeTruthy();
  }));
});
