import { MyInput } from '@/shared/ui/my-input';
import { usePersonalData } from '@/features/edit-personal-data';
import classes from './PersonalDataForm.module.scss';

export function PersonalDataForm() {
  const { data, setName, setSecondName, setThirdName, setNumber, setEmail, setPosition } = usePersonalData();

  return (
    <div className={classes.personalDataForm}>
      <MyInput
        label="Имя"
        value={data.name}
        onChange={(e) => setName(e.target.value)}
      />
      <MyInput
        label="Фамилия"
        value={data.secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <MyInput
        label="Отчество"
        value={data.thirdName}
        onChange={(e) => setThirdName(e.target.value)}
      />
      <MyInput
        label="Номер"
        type="tel"
        value={data.number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <MyInput
        label="Email"
        type="email"
        value={data.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MyInput
        label="Должность"
        value={data.position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>
  );
}
