import React, { Component, lazy, Suspense, ComponentType, ReactNode } from 'react';

type LoaderType = Parameters<typeof lazy>[0];

type LoadableProps = {
  loader: LoaderType;
  loading: () => NonNullable<ReactNode> | null;
};

export function Loadable({ loader, loading }: LoadableProps): ComponentType<any> {
  const Com = lazy(loader);
  return function (props: any) {
    return (
      <Suspense fallback={loading()}>
        <Com {...props} />
      </Suspense>
    );
  };
}

const loading = () => null;

export const BlankLoadable = (loader: LoaderType) => {
  return Loadable({ loader, loading });
};
