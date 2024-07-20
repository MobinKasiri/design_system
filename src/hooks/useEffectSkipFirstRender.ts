/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useState } from "react";

const useEffectSkipFirstRender = (
  callBack: () => void,
  dependencies: DependencyList
) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      callBack();
    }
    setCount((s) => (s = s + 1));
  }, dependencies);
};

export default useEffectSkipFirstRender;
