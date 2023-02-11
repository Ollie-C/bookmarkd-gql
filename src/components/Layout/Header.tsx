import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="bookmarkd">bookmark.d</h1>
      </Link>
    </header>
  );
};

export default Header;
