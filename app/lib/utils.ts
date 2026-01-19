/**
 * Converts bytes to a human-readable file size format
 * @param bytes - Size in bytes
 * @returns Human-readable string (e.g., "1.5 MB", "256 KB")
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
}
