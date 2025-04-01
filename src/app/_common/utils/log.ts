export const devLog = (...args: unknown[]) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    console.log(...args);
  }
};