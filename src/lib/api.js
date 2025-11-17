export const API_BASE = import.meta.env.VITE_BACKEND_URL || (typeof window !== 'undefined' ? `${window.location.origin.replace('3000','8000')}` : '');

export async function fetchJSON(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
