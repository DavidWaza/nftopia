import React from "react";
import { Title } from "../Shared/Typography/Typography";
import Container from "../Shared/Container/Container";
import Image from "next/image";

const Collection = () => {
  return (
    <section className="mt-[10rem] ">
      <Container>
        <Title variant="normal">NFTopia Collection</Title>
        <div className="collection-spiral">
          <img src="/assets/Frame 209.png" alt="frame" />
        </div>
      </Container>
    </section>
  );
};

export default Collection;
