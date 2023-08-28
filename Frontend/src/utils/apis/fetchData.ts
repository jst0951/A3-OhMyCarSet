export default function fetchData(endpoint: string) {
  const PromiseData = fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
    method: 'GET',
  })
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error('에러 발생!');
    })
    .catch((error) => console.error(error));

  return PromiseData;
}
