export default interface ICoursesList {
  id: string | number;
  logo: string;
  title: string;
  duration: string;
  modules: string;
  details: string;
  price: string;
  color: string;
  link: string;
  lessons?: string;
  task?: string;
  tests?: string;
  expert?: string;
}
