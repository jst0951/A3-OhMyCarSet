import { Outlet, Navigate } from 'react-router-dom';
import { SelectOptionData } from '@/contexts/SelectOptionProvider';

export default function PrivateRoute() {
  const myPalisadeSession = JSON.parse(sessionStorage.getItem('myPalisade') || '');
  let isSelectAll = true;

  myPalisadeSession.single.dataList.map((data: SelectOptionData) => {
    if (data.selectedId === 0) {
      isSelectAll = false;
    }
  });

  if (!isSelectAll) {
    alert('옵션 선택을 완료해주세요!');
  }

  return isSelectAll ? <Outlet /> : <Navigate to="/" />;
}
