import { MyInput } from '@/shared/ui/my-input';
import { MySelect } from '@/shared/ui/my-select';
import { usePersonalData } from '@/features/edit-personal-data';
import classes from './PersonalDataForm.module.scss';

export function PersonalDataForm() {
  const {
    data,
    setName,
    setSecondName,
    setThirdName,
    setNumber,
    setEmail,
    setPosition,
    setSalary,
    setSchedule,
  } = usePersonalData();

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
      <span />
      <MyInput
        label="Должность"
        value={data.position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <MyInput
        label="Зарплата"
        type="number"
        value={data.salary}
        onChange={(e) => setSalary(Number(e.target.value))}
      />
      <MySelect
        label="График работы"
        value={data.schedule}
        onChange={(e) => setSchedule(e.target.value)}
      >
        <option value="Полный день">Полный день</option>
        <option value="Неполный день">Неполный день</option>
        <option value="Удалённая работа">Удалённая работа</option>
      </MySelect>
    </div>
  );
}
