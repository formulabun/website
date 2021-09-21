import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if(!res.ok) {
    console.log("error", res.status);
    const err = new Error("The server responded with an error");
    err.info = await res.json();
    err.status = res.status;
    console.log(err);
    throw err;
  }
  return await res.json()
}

export function server(options= {}) {
  const {data, error} = useSWR('/api/server/', fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function players(options = {}) {
  const {data, error} = useSWR('/api/players/', fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
