export const deletePowertrainCache = async () => {
  const hasCache = await caches.has('powertrain');

  if (hasCache) await caches.delete('powertrain');
};
