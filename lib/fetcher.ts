// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher: (url: string, init?: RequestInit) => Promise<any> = async (
  url,
  init?,
) => {
  const response = await fetch(url, init);

  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    if (response.ok) {
      const bodyJson = await response.json();

      if (process.env.NODE_ENV === 'development') {
        console.log(
          `[fetcher.ts] Success to fetch on ${init?.method ?? 'GET'} ${url}`,
        );
        console.log('[fetcher.ts] Recieved Data:', bodyJson);
      }

      return { ...bodyJson, statusCode: response.status };
    }

    const { error } = await response.json();

    throw error;
  }
};

export default fetcher;
