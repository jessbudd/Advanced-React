import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  a {
    color: white;
  }
`;

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
