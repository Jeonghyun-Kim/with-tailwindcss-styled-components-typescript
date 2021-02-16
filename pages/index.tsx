import React from 'react';
import styled from 'styled-components';

// importing components
import { Head } from '@components/core';

// importing libraries
import fetchSampledata from '@lib/fetchSampleData';

const Root = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  // set data as a state with type Data(which is declaired in global.d.ts).
  const [data, setData] = React.useState<Data>({ hello: '' });
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const data = await fetchSampledata();

      setData(data as Data);
    } catch (err) {
      // error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>My Home Page</title>
      </Head>
      <Root>
        hello world
        <div className="w-10 h-10 bg-black mx-auto my-4" />
        <button
          className="bg-black text-white py-2 px-4 rounded-lg"
          onClick={() => handleFetch()}
          disabled={loading}
        >
          get data
        </button>
        <p className="text-lg">
          {loading ? 'loading...' : JSON.stringify(data, null, 2)}
        </p>
      </Root>
    </>
  );
};

export default Home;
