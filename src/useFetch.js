import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(url);
      const json = await req.json();
      setData(json);
    }
    fetchData();
  }, [url]);

  return data;
}
