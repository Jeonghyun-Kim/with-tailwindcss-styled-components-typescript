import fetcher from '@lib/fetcher';

const fetchSampledata: () => Promise<unknown> = async () => {
  const { data } = await fetcher('/api/sample');

  return data;
};

export default fetchSampledata;
