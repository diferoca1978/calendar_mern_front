import { useEffect, useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { FormsLayout } from '../../layout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useAuthStore } from '../../hooks';
import Swal from 'sweetalert2';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(30, { message: 'Field must contain max 30 characters' }),
  email: z
    .string()
    .email({ message: 'Must be a valid Email' })
    .trim()
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
});

export const Registerpage = () => {
  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const { startRegister, errorMessage } = useAuthStore();

  const onSubmit = ({ name, email, password }) => {
    startRegister({ name, email, password });
  };

  const [showPassword, SetShowPassword] = useState(false);

  const tooglePassword = () => {
    SetShowPassword(!showPassword);
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Athentication error',
        text: errorMessage,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        showConfirmButton: true,
      });
    }
  }, [errorMessage]);

  return (
    <>
      <FormsLayout title="Sing Up">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email@prueba.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...field}
                      />
                      <Button
                        variant="ghost"
                        type="button"
                        size="icon"
                        onClick={tooglePassword}
                        className="absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground"
                      >
                        {!showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sing Up
            </Button>
            <div>
              <p className="transition ease-in-out delay-100 hover:translate-x-3 hover:text-amber-500 hover:scale-105 duration-150">
                <NavLink to="/auth/login">
                  Do you have an account? Sing In!!
                </NavLink>
              </p>
            </div>
          </form>
        </Form>
      </FormsLayout>
    </>
  );
};
