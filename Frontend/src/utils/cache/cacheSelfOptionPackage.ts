import { optionPackageList } from '@/constants';

export const cacheSelfOptionPackage = async () => {
  const cache = await caches.open('optionPackage');

  const urls = optionPackageList.map((data) => {
    return `${import.meta.env.VITE_API_URL}/selective_option/option_package/${data.key}`;
  });

  for (const url of urls) {
    const response = await fetch(url);

    if (response.ok) {
      await cache.put(url, response.clone());
    } else {
      console.error(`Failed to fetch response for ${url}`);
    }
  }
};
