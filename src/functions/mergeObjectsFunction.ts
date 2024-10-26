type PlainObject = { [key: string]: any };

const mergeObjectFunction = (
  target: PlainObject,
  source: PlainObject
): PlainObject => {
  const newObject: PlainObject = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        if (
          Object.prototype.hasOwnProperty.call(newObject, key) &&
          typeof newObject[key] === "object" &&
          newObject[key] !== null
        ) {
          newObject[key] = mergeObjectFunction(newObject[key], source[key]);
        } else {
          newObject[key] = { ...source[key] };
        }
      } else {
        newObject[key] = source[key];
      }
    }
  }

  return newObject;
};

export default mergeObjectFunction;
