const bigTask = (int: number)=> {
  const sum = new Array(int).fill(0).map((el, index)=> el+ index).reduce((sum, el)=> sum + el, 0)

  console.log(sum);
}

export function runBigTask(int: number){
  bigTask(int)
  return "🎉 done 🎉"
}

onmessage = (message: MessageEvent<number>) => {
  console.log("🎉 done 🎉");
    const int = message.data
    const result = runBigTask(int)
    postMessage(result);
};