import { Outlet, Navigate } from 'react-router-dom';
import { SelectOptionData, useSelectOptionState } from '@/contexts/SelectOptionProvider';

export default function PrivateRoute() {
  const selectOptionState = useSelectOptionState();
  let contextExist = true;

  selectOptionState.dataList.map((data: SelectOptionData) => {
    if (data.selectedId === 0) {
      contextExist = false;
    }
  });

  return 'myPalisade' in sessionStorage || contextExist ? <Outlet /> : <Navigate to="/error" />;
}
