export const removeZeroPrefix = (input: string) => {
  const raw = String(input);
  if (raw.startsWith("0")) {
    return raw.slice(1);
  }
  return raw;
};

export default removeZeroPrefix;
