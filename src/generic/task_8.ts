/* 
У вас є тип Form, який містить інформацію про форму, включаючи поле errors. 
Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.
*/
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використання Omit для створення типу Params без поля errors
type FormParams = Omit<Form, 'errors'>;