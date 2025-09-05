import { useMemo } from "react";

const fibonacci = (num) =>
  num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);

const FibonacciNumber = ({ value }) => {
  const result = useMemo(() => fibonacci(value), [value]);
  return (
    <p>
      {value}: {result}
    </p>
  );
};

export default FibonacciNumber;
