import { getDictionary } from '../lib/get-dictionary';

export default async function NotFound() {
  const dict = await getDictionary('sp');

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <p className="fs-4">{dict.error_title}</p>
      <a href="/pokeapi" className="btn btn-primary">
        {dict.error_btn}
      </a>
    </div>
  );
}
