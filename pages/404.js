import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  })
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