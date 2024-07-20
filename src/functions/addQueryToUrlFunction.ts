const addQueryToUrlFunction = (key: string, value: string) => {
  const newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    `?${key}=${value}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};

export default addQueryToUrlFunction;
