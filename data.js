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

const wrapper = (url, options) => {
  const {data, error} = useSWR(url, fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function server(options= {}) {
  return wrapper('/api/server/', options);
}

export function players(options = {}) {
  return wrapper('/api/players/', options);
}

export async function maps(options = {}) {
  const res = await fetch(`https://api.${process.env.NEXT_PUBLIC_REPO_IP}/api/static/maps.json`, options);
  return await res.json();
}
