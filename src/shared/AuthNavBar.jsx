import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { CalendarDays, LogOut, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const AuthNavBar = () => {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center border-b bg-primary px-4 md:px-6">
        <nav className="container flex justify-between ">
          <NavLink
            className="flex items-center hover:scale-105 duration-200 "
            to="/calendar"
          >
            <CalendarDays
              className="items-center text-primary-foreground"
              size={36}
            />
            <span className="text-primary-foreground ml-1">Calendar</span>
          </NavLink>

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
              className="bg-primary-foreground rounded-lg divide-y divide-primary p-2 mt-1"
            >
              <DropdownMenuLabel className="mb-2">My Account</DropdownMenuLabel>
              <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                <NavLink
                  to="/auth/profile"
                  className="flex justify-between items-center"
                >
                  Profile
                  <User />
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                <NavLink
                  to="/auth/profile"
                  className="flex justify-between items-center"
                >
                  Logout
                  <LogOut />
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
    </>
  );
};
