// app/env/server.ts

// Central place to load all server-side environment variables
export const serverEnv = {
  OLLAMA_API_BASE_URL: process.env.OLLAMA_API_BASE_URL ?? 'http://127.0.0.1:11434',
  RUNNING_IN_DOCKER: process.env.RUNNING_IN_DOCKER ?? 'false',

  OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? '',
};
