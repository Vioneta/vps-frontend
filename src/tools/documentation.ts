export const documentationUrl = (options?: { path?: string }) => {
  return `https://vps.vioneta.com${options?.path || ""}`;
};
