import { useState } from 'react';
import type { UserPersonalData } from '@/entities/hero';

export function usePersonalData(
  initial: UserPersonalData = { name: '', secondName: '', thirdName: '', number: '', email: '', position: '' },
) {
  const [data, setData] = useState(initial);
  const setName = (name: string) => setData((prev) => ({ ...prev, name }));
  const setSecondName = (secondName: string) =>
    setData((prev) => ({ ...prev, secondName }));
  const setThirdName = (thirdName: string) =>
    setData((prev) => ({ ...prev, thirdName }));
  const setNumber = (number: string) => setData((prev) => ({ ...prev, number }));
  const setEmail = (email: string) => setData((prev) => ({ ...prev, email }));
  const setPosition = (position: string) => setData((prev) => ({ ...prev, position }));

  return { data, setName, setSecondName, setThirdName, setNumber, setEmail, setPosition };
}
