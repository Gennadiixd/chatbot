export const getTimeObject = () => {
  const newDate = new Date();
  const date = newDate.toISOString().substring(0, 10).replace(/-/g, "/").split('/').reverse().join('/');
  const time = new Date().toLocaleTimeString();
  return { date, time }
}