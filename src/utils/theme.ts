export const removeUnitFromTheme = (size: string): number => {
  let checkString = size.replace(/\D/g, '');
  return checkString ? parseInt(checkString) : 0;
};
