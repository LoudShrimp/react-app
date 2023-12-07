import create from "./http-service";

//interface for defining the shape of our users for our "API" call
export interface User {
  id: number;
  name: string;
}

export default create('/users');