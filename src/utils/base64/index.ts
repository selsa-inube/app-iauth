export const normalizeBase64 = (input: string): string => {
  // Convert base64url to base64 and add padding
  let s = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s.length % 4;
  if (pad === 2) s += "==";
  else if (pad === 3) s += "=";
  else if (pad !== 0) {
  }
  return s;
};

export const base64ToUtf8 = (input: string): string => {
  const normalized = normalizeBase64(input);
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder("utf-8").decode(bytes);
};

export const safeBase64ToString = (input: string | undefined | null): string => {
  if (typeof input !== "string" || input.length === 0) return "";
  try {
    return base64ToUtf8(input);
  } catch {
    return input;
  }
};
