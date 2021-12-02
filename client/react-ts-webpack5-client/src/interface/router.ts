export interface PartialRouteObject {
  caseSensitive?: boolean;
  children?: PartialRouteObject[];
  element?: React.ReactNode;
  path?: string;
}

export type PartialAuthRouteObject = PartialRouteObject & {
  auth?: boolean;
  onlyGuest?: boolean;
};
