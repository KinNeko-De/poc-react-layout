import React from 'react';
import GlobalHeader from './globalheader';
import { Outlet, useOutletContext } from 'react-router-dom';
import { Console } from 'console';

type Context = {
  title: string
  setTitle: (title: string) => void
  user: User | null,
  setUser: (user: User) => void
};

type User = {
  displayName: string
  email: string
};


export default function Layout() {
  const [title, setTitle] = React.useState<string>('Initial title');

  // const [user, setUser] = React.useState<User | null>(null);
  /*
  const [context, setContext] = React.useState<Context>({
    title: 'Default title',
    setTitle: (title: string) => setContext((prev) => ({ ...prev, title })),
    user: null,
    setUser: (user: User) => setContext((prev) => ({ ...prev, user }))
  });
  */
  return (
    <>
      <header>
        <h1>{title}</h1>
        <GlobalHeader />
      </header>
      <main>
        <Outlet context={title} />
      </main>
    </>
  );
};