function checkLength(a: string, b: number)
{
  return a.length < b;
}

type Func = () => void;
type Params = Parameters<typeof checkLength>;

const args: Params = ["HillyBilly", 93];
console.log(args);
console.log(checkLength(...args));
