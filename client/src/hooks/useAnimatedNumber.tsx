import { useEffect, useState } from "react";

function useAnimatedNumber(target: number, duration: number = 1000): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const initialValue = value;

    const delta = target - initialValue;

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const fraction = Math.min(elapsedTime / duration, 1);

      setValue(initialValue + delta * fraction);

      if (fraction < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return value;
}

export default useAnimatedNumber;
