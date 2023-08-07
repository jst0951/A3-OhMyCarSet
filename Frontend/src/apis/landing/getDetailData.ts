export function getDetailData(endpoint: string) {
  const landingPromiseData = fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error('에러 발생!');
    })
    .catch((error) => console.log(error));

  return landingPromiseData;
}
