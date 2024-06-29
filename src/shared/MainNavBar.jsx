import { NavLink } from 'react-router-dom';
import { LogOut, Menu, Search, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Sheet, SheetTrigger, SheetContent } from '../components/ui/sheet';
import { Button, Input } from '../components/ui';
import { Logo } from '../helpers/Logo';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { useAuthStore } from '../hooks';

export const MainNavBar = () => {
  const { status } = useAuthStore();

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-primary px-4 md:px-6">
        <nav className="container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base text-primary-foreground"
          >
            <Logo />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-orange-500' : 'text-primary-foreground'}`
            }
          >
            About
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>SingIn</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-primary-foreground rounded-lg p-2 mt-1"
            >
              <DropdownMenuLabel className="mb-2">Hello,</DropdownMenuLabel>
              <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                <NavLink
                  to="/auth/login"
                  className="flex justify-between items-center"
                >
                  Sing In
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                <NavLink
                  to="/auth/register"
                  className="flex justify-between items-center"
                >
                  Sing Up
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 md:hidden text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[200px] sm:w-[250px]">
            <nav className="grid gap-6 text-lg justify-start">
              <h4>Hello,</h4>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-500' : 'text-inherit'}`
                }
              >
                About
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-lg outline-none hover:bg-transparent hover:text-orange-500 p-0"
                  >
                    Sing In
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-primary-foreground rounded-lg p-2 mt-1"
                >
                  <DropdownMenuLabel className="mb-2">Hello,</DropdownMenuLabel>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink
                      to="/auth/login"
                      className="flex justify-between items-center"
                    >
                      Sing In
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-1 outline-none hover:text-orange-500">
                    <NavLink
                      to="/auth/register"
                      className="flex justify-between items-center"
                    >
                      Sing Up
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-8 h-[40px] sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>

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
                className="bg-primary-foreground rounded-lg  p-2 mt-1"
              >
                <DropdownMenuLabel className="mb-2">
                  My Account
                </DropdownMenuLabel>
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
          )}
        </div>
      </header>
    </>
  );
};
