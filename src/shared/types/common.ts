import { StoreConstructorProps } from "@/client/stores";
import { AppProps } from "next/app";
import React, { ComponentType } from "react";

export type DefaultAppPageProps = {
  initialMobxState: StoreConstructorProps;
};

/**
 * L:Layout props type
 * P:page props type
 */
export type BlobNextPage<
  L extends Record<string, any> = {},
  P extends Record<string, any> = DefaultAppPageProps
> = AppProps<P> & {
  Component: AppProps<P>["Component"] & {
    Layout: (props: ComponentWithChildren<L>) => JSX.Element;
  };
};

export type ComponentWithChildren<P extends Record<string, any> = {}> = P & {
  children: React.ReactNode;
};

export type TabItem = {
  // unique every single
  uuid: string;
  // path
  key: string;
  Component: ComponentType;
};

export type ExpressResponseResult<T = any> = {
  code: number;
  data?: T;
  error?: {
    errorCode: number;
    errorMessage: string;
  };
};
