import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} placeholder="Example input" />
      <input {...register("exampleRequired", { required: true })} placeholder="Example required input" />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}

export default App
