import { urlAttrs } from "../src";

describe('urlAttrs', () => {
  it('should return all attrs', () => {
    const url = 'http://www.mysite.com/path?name=hector&last_name=zarco';
    
    expect(urlAttrs(url)).toEqual({
      name: 'hector',
      last_name: 'zarco'
    })
  });

  it('should work with hash', () => {
    const url = 'http://www.mysite.com/path#name=hector&last_name=zarco';
    
    expect(urlAttrs(url)).toEqual({
      name: 'hector',
      last_name: 'zarco'
    })
  });
});
