function publicMailError(error: unknown) {
  if (!error || typeof error !== "object") return String(error || "Unknown mail error");
  const e = error as { message?: string; code?: string; command?: string; response?: string; responseCode?: number };
  return [e.code, e.command, e.response || e.message].filter(Boolean).join(" | ");
}

export function mailFailResponse(error: unknown) {
  console.error("Mail failed", error);
  return {
    ok: false,
    error: publicMailError(error),
  };
}
