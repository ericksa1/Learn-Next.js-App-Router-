'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-3">
      {/* Add form fields for email and password */}
      <Button className="mt-4 w-full" aria-disabled={isPending}>
        Log in
      </Button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}