import React from "react";
import { Title } from "../Shared/Typography/Typography";
import Container from "../Shared/Container/Container";
import Image from "next/image";

const Collection = () => {
  return (
    <section className="mt-[10rem]">
      <Container>
        <div className="text-center lg:text-start">

        <Title variant="normal">NFTopia Collection</Title>
        </div>
        <div className="collection-spiral -ml-[5%]">
          <img src="/assets/Frame 209.png" alt="frame" />
        </div>
      </Container>
    </section>
  );
};

export default Collection;
