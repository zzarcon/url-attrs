export const urlAttrs = (url: string): Object => {
  let queryParams;
  const u = new URL(url);
  
  if (u.search) {
    queryParams = u.search.replace('?', ''); 
  } else if (u.hash) {
    queryParams = u.hash.replace('#', ''); 
  }

  const params = new URLSearchParams(queryParams);
  
  return Array.from(params.entries()).reduce((prev, next) => {
    prev[next[0]] = next[1];
    return prev;
  }, {})
}