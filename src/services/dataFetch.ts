import { data } from "./data/data";

class DataFetch {
  get<T>(path: string): T {
    const splittedPath = path.split("/");

    switch (splittedPath.length) {
      case 1:
        return data[splittedPath[0]];
        break;
      case 2:
        return data[splittedPath[0]][splittedPath[1]];
        break;
      case 3:
        return data[splittedPath[0]][splittedPath[1]];
        break;
      default:
        throw new Error("Path is not valid.");
    }
  }
}

export const dataFetch = new DataFetch();
