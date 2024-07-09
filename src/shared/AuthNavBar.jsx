import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Logo } from '../helpers/Logo';
import { useAuthStore } from '../hooks';

export const AuthNavBar = () => {
  const { status, startLogOut, user } = useAuthStore();

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center border-b bg-primary px-4 md:px-6">
        <nav className="container flex justify-between ">
          <NavLink className="hover:scale-105 duration-200 " to="/">
            <Logo />
          </NavLink>
          {status === 'authenticated' && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-7 h-7"
                >
                  <Avatar>
                    <AvatarImage src="#" alt="avatarImage" />
                    <AvatarFallback>UA</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toogle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-primary-foreground rounded-lg p-2 mt-1"
              >
                <DropdownMenuLabel className="mb-2 border-b border-secondary-foreground pb-1 text-center">
                  <p>Welcome !!</p>
                  <p>{user.name}</p>
                </DropdownMenuLabel>
                <DropdownMenuItem className="p-1 outline-none ">
                  <NavLink
                    to="/auth/profile"
                    className="flex gap-4 hover:bg-transparent hover:text-orange-500"
                  >
                    <p>Profile</p>
                    <User />
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-1 outline-none ">
                  <Button
                    onClick={startLogOut}
                    type="button"
                    variant="ghost"
                    className="flex gap-4 p-0 font-normal hover:bg-transparent hover:text-orange-500"
                  >
                    <p>Logout</p>
                    <LogOut />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>
      </header>
    </>
  );
};
