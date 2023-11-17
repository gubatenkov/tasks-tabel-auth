import type { Metadata } from 'next'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import RegisterForm from '@/components/RegisterForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Welcome! Register please.',
}

export default async function Page() {
  const session = await getServerSession(authOptions)
  if (session?.user) redirect('/')

  return (
    <div
      className="container relative grid h-screen flex-col items-center justify-center
      lg:max-w-none lg:grid-cols-2 lg:px-0"
    >
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <img
          className="absolute bottom-0 left-0 right-0 top-0 inline-flex h-full w-full object-cover"
          src="/bg.jpg"
          alt=""
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              “Life isn’t about finding yourself. Life is about creating
              yourself.” -
            </p>
            <footer className="text-sm">George Bernard Shaw</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Registration
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill out the fields below to create your account
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}