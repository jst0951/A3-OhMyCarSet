import { SelectTagData } from '@/contexts/SelectTagProvide';

type SelectTagWithId = SelectTagData & {
  recommendOptionId: number[];
};

type BodyType = SelectTagData | SelectTagWithId;

export default function fetchPost(endpoint: string, body: BodyType) {
  console.log(body);
  const PromiseData = fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      throw new Error('에러 발생!');
    })
    .catch((error) => console.log(error));

  return PromiseData;
}
