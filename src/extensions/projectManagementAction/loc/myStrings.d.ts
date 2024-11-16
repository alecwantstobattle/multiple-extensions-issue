declare interface IProjectManagementActionCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ProjectManagementActionCommandSetStrings' {
  const strings: IProjectManagementActionCommandSetStrings;
  export = strings;
}
