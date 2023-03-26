import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    name: string;
    body: string;
    titleText: string;
    primary: string;
    background: string;
  }
}
