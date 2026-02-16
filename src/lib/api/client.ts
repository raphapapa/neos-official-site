const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";

export async function apiFetch<T>(
  path: string,
  options?: { revalidate?: number; cache?: RequestCache }
): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: options?.revalidate !== undefined ? { revalidate: options.revalidate } : undefined,
      cache: options?.cache,
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
