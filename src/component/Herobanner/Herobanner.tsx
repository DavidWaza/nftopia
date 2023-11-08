import React from "react";
import Container from "../Shared/Container/Container";
import { Header, Text } from "../Shared/Typography/Typography";
import Button from "../Shared/Button/Button";

const Herobanner = () => {
  return (
    <div className="hero-spiral">
      <Container>
        <div className="w-full lg:w-[85%] mt-[6rem] relative">
          <Header className="font-space-grotesk lg:leading-[120px]">
            NFTopia
            <span className="lg:absolute left-[40%] top-0 hidden lg:block">
              <Text variant="small" className="text-[#767474] font-kanit">
                Experience the Power of NFTs for Ownership and Authenticity.
              </Text>
            </span>
            <span className="lg:absolute left-[42%] top-5 font-kanit hidden lg:block">
              <Text variant="small" className="text-[#767474]">
                Invest in the Future of Digital Art with NFTs.
              </Text>
            </span>
          </Header>
          <Header className="font-space-grotesk lg:leading-[120px]">
            Animated NFTs
          </Header>
          <Header className="font-space-grotesk lg:leading-[120px]">
            Collection
          </Header>
          <div className="lg:absolute top-[80%] left-[49%]">
            <Button>
              <Text variant="small" className="font-bold">
                Explore
              </Text>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Herobanner;
