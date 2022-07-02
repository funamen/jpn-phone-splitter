export const removeE164JpnPrefix = (input: string) => {
  const raw = String(input);
  if (raw.startsWith("+81")) {
    return raw.slice(3);
  } else if (raw.startsWith("81")) {
    return raw.slice(2);
  }
  return raw;
};
export default removeE164JpnPrefix;
