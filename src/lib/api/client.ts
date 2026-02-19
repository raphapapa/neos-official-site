const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";

export async function apiFetch<T>(
  path: string,
  options?: { revalidate?: number; cache?: RequestCache }
): Promise<T | null> {
  const url = `${API_BASE}${path}`;
  try {
    const res = await fetch(url, {
      next: options?.revalidate !== undefined ? { revalidate: options.revalidate } : undefined,
      cache: options?.cache,
    });
    if (!res.ok) {
      console.error(`[API ${res.status}] ${url}`);
      return null;
    }
    return res.json();
  } catch (err) {
    console.error(`[API Network Error] ${url}:`, err instanceof Error ? err.message : err);
    return null;
  }
}
