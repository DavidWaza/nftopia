import React from "react";
import { Text } from "../Shared/Typography/Typography";
import Logo from "../Shared/Logo/Logo";
import Link from "next/link";
import Container from "../Shared/Container/Container";
import Button from "../Shared/Button/Button";

const navlists = [
  "Story",
  "Collection",
  "Roadmap",
  "Top Collectors",
  "Community",
];
const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <Container>
        <nav className="h-[101px] py-[30px] flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <div className="flex justify-center gap-8 font-kanit">
            {navlists.map((navlist, index) => (
              <ul key={index}>
                <li>
                  <Link href={navlist}>{navlist}</Link>
                </li>
              </ul>
            ))}
          </div>
          <div className="btn">
            <Button variant="secondary">
              <Text className="font-kanit"> Community</Text>
            </Button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
