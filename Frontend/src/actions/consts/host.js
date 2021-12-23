const run_vars = window.APP_CONFIG || {};

export const host =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "//localhost:8000"
    : "//localhost:8000";
