"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { AuthRoutes, Route } from "@/routes/routes";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const Login: Route | undefined = AuthRoutes.find(
    (route) => route.title === "Login"
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form className='p-6 md:p-8'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl font-extrabold text-main-orange'>
                  Sign Up
                </h1>
                <p className='text-muted-foreground text-balance'>
                  Create a new account
                </p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='grid gap-3'>
                  <Label htmlFor='first_name'>First Name</Label>
                  <Input
                    id='first_name'
                    type='text'
                    placeholder='First Name'
                    required
                  />
                </div>
                <div className='grid gap-3'>
                  <Label htmlFor='last_name'>Last Name</Label>
                  <Input
                    id='last_name'
                    type='text'
                    placeholder='Last Name'
                    required
                  />
                </div>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='user@techadvise.com'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='username'>Username</Label>
                <Input
                  id='username'
                  type='text'
                  placeholder='Username'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input id='password' type='password' required />
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='phone_number'>Phone Number</Label>
                <Input
                  id='phone_number'
                  type='tel'
                  placeholder='+63'
                  required
                />
              </div>
              <Button
                type='button'
                className='w-full bg-main-orange hover:bg-main-orange-dark'
                onClick={() => router.push("/")}
              >
                Sign Up
              </Button>
              <div className='text-center text-sm'>
                Already have an account?{" "}
                {Login && (
                  <a
                    href={Login.url}
                    className='text-main-orange underline underline-offset-4'
                  >
                    {Login.title}
                  </a>
                )}
              </div>
            </div>
          </form>
          <div className='hidden md:flex bg-muted relative h-full items-center justify-center'>
            <Image
              src='/TechAdvise-Gray.png'
              alt='Image'
              width={700 / 2.7}
              height={692 / 2.7}
              className='dark:brightness-[0.2] dark:grayscale'
            />
          </div>
        </CardContent>
      </Card>
      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{" "}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
