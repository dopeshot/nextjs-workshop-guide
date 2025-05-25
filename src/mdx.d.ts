declare module "*.mdx" {
  import * as React from "react";
  export const meta: {
    title: string;
    description: string;
    [key: string]: any;
  };
  const MDXComponent: React.FC;
  export default MDXComponent;
}
