'use client'

import FullLogo from '@/app/(DashboardLayout)/layout/shared/logo/FullLogo'
import CardBox from '../shared/CardBox'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Register = () => {
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center bg-lightprimary'>
        <div className='md:min-w-[450px] min-w-max'>
          <CardBox>
            <div className='flex justify-center mb-4'>
              <FullLogo />
            </div>
            <p className='text-sm text-charcoal text-center mb-6'>
              Your Social Campaigns
            </p>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='name1' className='font-medium'>
                  Name
                </Label>
              </div>
              <Input
                id='name1'
                type='text'
                placeholder='Enter your name'
                required
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' className='font-medium'>
                  Email
                </Label>
              </div>
              <Input
                id='email1'
                type='email'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='mt-6'>
              <div className='mb-2 block'>
                <Label htmlFor='password1' className='font-medium'>
                  Password
                </Label>
              </div>
              <Input
                id='password1'
                type='password'
                placeholder='Enter your password'
                required
              />
            </div>
            <Button className='w-full mt-6' asChild>
              <Link href='/'>Sign Up</Link>
            </Button>
            <div className='flex items center gap-2 justify-center mt-6 flex-wrap'>
              <p className='text-base font-medium text-link dark:text-darklink'>
                Already have an account?
              </p>
              <Link
                href='/auth/login'
                className='text-sm font-medium text-primary hover:text-primaryemphasis'>
                Sign In
              </Link>
            </div>
          </CardBox>
        </div>
      </div>
    </>
  )
}
