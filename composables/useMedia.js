export default function (url) {
    const runtimeConfig = useRuntimeConfig();
    if (url.startsWith("/")) {
      return `${runtimeConfig.public.apiBase}${url}`;
    }
    return url;
  }
  