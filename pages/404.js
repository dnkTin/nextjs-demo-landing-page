import Link from "next/link";

const NotFound = () => {
  return ( 
    <div>
      <div>Oooops...</div>
      <div>That site can not be found.</div>
      <Link href="/">
        <p>Go back to the homepage</p>
      </Link>
    </div>
   );
}
 
export default NotFound;