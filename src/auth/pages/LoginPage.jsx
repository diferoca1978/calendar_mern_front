import { useState } from 'react';
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
import { GoogleLogo } from '../../helpers/GoogleLogo';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useAuthStore } from '../../hooks';

const initialValues = {
  email: '',
  password: '',
};

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Must be a valid Email' })
    .trim()
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
});

export const Loginpage = () => {
  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(formSchema),
  });

  const { startLogin } = useAuthStore();

  const onSubmit = ({ email, password }) => {
    startLogin({ email, password });
  };

  const [showPassword, SetShowPassword] = useState(false);

  const tooglePassword = () => {
    SetShowPassword(!showPassword);
  };

  return (
    <>
      <FormsLayout title="Sing In">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-4"
          >
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
              Sing In
            </Button>

            <div className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px w-16 bg-black"></span>
              <span className="text-inherit font-normal">or</span>
              <span className="h-px w-16 bg-black"></span>
            </div>

            <Button type="submit" className="w-full">
              <GoogleLogo /> <span className="ml-2">Sing In with Google</span>
            </Button>

            <p className="transition ease-in-out delay-100 hover:translate-x-3 hover:text-amber-500 hover:scale-105 duration-200">
              <NavLink to="/auth/register">
                Do not have an account? Sing Up !!
              </NavLink>
            </p>
          </form>
        </Form>
      </FormsLayout>
    </>
  );
};
