import Button from './Button';

const AddPersonForm = ({ onSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    onSubmit({ name: e.target.name.value });
    e.target.reset();
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="name" required/>
      <Button type="submit">
        Add person
      </Button>
    </form>
  )
};

export default AddPersonForm;