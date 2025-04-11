import { useForm } from 'react-hook-form';

export const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: unknown) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
                <option value="female" >Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
            </select>
            <input type="submit" />
        </form>
    );
};