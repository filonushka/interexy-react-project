import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

function MyWorker() {
  const [data, setData] = useState<string>("Click the Button 👇");
  const [worker, setWorker] = useState<Worker | null>();
  // const [result, setResult] = useState<String>("");
  // const [isLoading, setIsLoading] = useState<Boolean>(false);
  // const [number, setNumber] = useState("");

  useEffect(() => {
    const worker: Worker = new Worker(
      new URL("../../workers/bigTask.worker.ts", import.meta.url)
    );
    setWorker(worker);

    worker.onmessage = (e) => {
      setData(e.data);
      console.log(e.data);
    };
  }, []);

  const handleWorkerBtnClick = () => {
    if (!worker) return;
    worker.postMessage(200000);
    console.log(worker);
    console.log("Сообщение, отправленное в worker-объект");
  };

  return (
    <Grid container flexDirection="column">
      <Grid item sx={{ mt: 1, mb: 1 }}>
        <div>{data}</div>
      </Grid>
      <Button
        variant="contained"
        onClick={handleWorkerBtnClick}
        sx={{ backgroundColor: "#f2f3f4", color: "#2c2b30" }}
      >
        Web Worker
      </Button>
    </Grid>
  );
}

export default MyWorker;
