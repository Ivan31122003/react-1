import { MyGroup } from '@/shared/ui/my-group';
import { PersonalDataForm } from '@/features/edit-personal-data';

export function EditResume() {
  return (
    <>
      <MyGroup label="Основная информация">
        <PersonalDataForm />
      </MyGroup>
    </>
  );
}
