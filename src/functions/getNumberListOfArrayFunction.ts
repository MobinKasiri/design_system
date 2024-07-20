const getNumberListOfArrayFunction = <T, U>(
  array: T[],
  target: U
): number[] => {
  let result: number[] = [];
  array.some((element: any) => {
    const { id, items = [] } = element as any;
    if (id === target) {
      result.push(id);
      return true;
    }
    const temp = getNumberListOfArrayFunction(items, target);
    if (temp.length > 0) {
      result = [id, ...temp];
      return true;
    }
    return false;
  });
  return result;
};

export default getNumberListOfArrayFunction;
