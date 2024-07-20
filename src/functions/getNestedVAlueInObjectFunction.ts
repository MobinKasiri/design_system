const getNestedValueInObjectFunction = (obj: any, path: string) => {
  const parts = path.split(".");
  let current = obj;

  for (const part of parts) {
    if (!current || !current.hasOwnProperty!(part)) {
      return undefined;
    }
    current = current[part];
  }

  return current;
};

export default getNestedValueInObjectFunction;
