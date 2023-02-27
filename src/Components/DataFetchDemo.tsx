import { useEffect, useState } from "react";
import axios from "axios";

export const DataFetchDemo = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<string[]>("http://localhost:5001/ads-spend-data", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>DataFetchDemo</h1>

      {loading && <div>Loading</div>}

      <pre>
        {data != null &&
          data.slice(0, 10).map((item: string) => JSON.stringify(item))}
      </pre>
    </div>
  );
};
