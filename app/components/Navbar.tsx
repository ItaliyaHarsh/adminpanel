import { Form, Link } from "@remix-run/react";

const Navbar = () => {
  const Home = () => {};
  return (
    <>
      <nav className="w-full h-14 px-4 py-4 bg-purple-600 flex justify-between font-semibold">
        <div className="text-white">
          <Link to="/">LOGO</Link>
        </div>
        <ul className="flex text-white">
          <li className="cursor-pointer px-3" onClick={Home}>
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="cursor-pointer px-3">
            <Link to="/dashboard/about">About</Link>
          </li>
          <li className="cursor-pointer px-3">
            <Link to="/dashboard/contact">Contact</Link>
          </li>
          <li className="cursor-pointer px-3">
            <Form method="post" action="/logout">
              <button type="submit">Logout</button>
            </Form>
            {/* <Link to="/logout">Logout2</Link> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
