import React from 'react';
import GlobalHeader from './globalheader';
import { Outlet, useOutletContext } from 'react-router-dom';

type LayoutContext = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
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
        <GlobalHeader title={title} />
      </header>
      <main>
        <Outlet context={{ setTitle } satisfies LayoutContext} />
      </main>
    </>
  );
};

export function useLayoutContext() {
  const context = useOutletContext<LayoutContext>();
  return context;
}