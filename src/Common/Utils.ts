export const addZeroes = (num: string) => {
  return Number(num).toFixed(Math.max(num.split('.')[1]?.length, 2) || 2);
};
