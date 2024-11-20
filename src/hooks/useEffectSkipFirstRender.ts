/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useRef } from "react";

const useEffectSkipFirstRender = (
  callBack: () => void,
  dependencies: DependencyList
) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    callBack();
  }, dependencies);
};

export default useEffectSkipFirstRender;
