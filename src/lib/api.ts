const API_PROXY_PREFIX = '/backend-api';

export const buildApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const backendPath = normalizedPath.startsWith('/api/')
    ? normalizedPath.slice(4)
    : normalizedPath;

  return `${API_PROXY_PREFIX}${backendPath}`;
};
