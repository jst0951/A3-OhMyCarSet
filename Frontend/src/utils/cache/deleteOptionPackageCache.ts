export const deleteOptionPackageCache = async () => {
  const hasCache = await caches.has('optionPackage');

  if (hasCache) await caches.delete('optionPackage');
};
