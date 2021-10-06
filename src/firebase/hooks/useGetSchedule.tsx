import { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getSchedule } from '../queries/schedule';

import { formatResult } from '../utils';

const useGetSchedule = () => {
  const [schedules, setSchedules] = useState<any>([]);
  const [data, loading, error] = useCollection(getSchedule());

  useEffect(() => {
    if (!loading) {
      const parsedData = formatResult(data);
      parsedData.map((schedule: any) => {
        schedule.date = new Date(schedule.date.toDate()).toLocaleDateString('en-US');
      });
      setSchedules(parsedData);
    }
  }, [loading]);

  return [schedules, loading, error];
};

export default useGetSchedule;
