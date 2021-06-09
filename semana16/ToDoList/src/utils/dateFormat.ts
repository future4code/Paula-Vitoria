export const formatDate = (date: string): string => {
  const day = date.substring(0, 2);
  const month = date.substring(3, 5);
  const year = date.substring(6, 10);
  const result = `${year}-${month}-${day}`;
  return result;
};
