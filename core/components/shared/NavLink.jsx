import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ path, name, className, style, isOnlyView = false }) => {
  const router = useRouter();
  return (
    <>
      {
        isOnlyView &&
        <a
          style={style}
          className={` text-dark mr-14 font-medium cursor-pointer hover:text-primary ${className}`}
        >
          {name}
        </a>

      }
      {
        !isOnlyView &&
        <Link href={path} passHref>
          <a
            style={style}
            className={`px-5  font-light cursor-pointer hover:text-primary ${link.path == router.pathname && "text-primary"
              } ${className}`}
          >
            {name}
          </a>
        </Link>
      }
    </>
  );
};

export default NavLink;
