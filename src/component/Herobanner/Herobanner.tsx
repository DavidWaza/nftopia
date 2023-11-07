import React from "react";
import Container from "../Shared/Container/Container";
import { Header, Text } from "../Shared/Typography/Typography";
import Button from "../Shared/Button/Button";

const Herobanner = () => {
  return (
    <div className="hero-spiral">
      <Container>
        <div className="w-full lg:w-[80%] mt-[3rem] relative">
          <div className="absolute -right-[15%] top-11 hidden lg:block">
            <Text variant="small" className="text-[#767474] font-kanit">
              Experience the Power of NFTs for Ownership and Authenticity.
            </Text>
          </div>
          <div className="absolute right-[5%] top-20 font-kanit hidden lg:block">
            <Text variant="small" className="text-[#767474]">
              Invest in the Future of Digital Art with NFTs.
            </Text>
          </div>
          <Header className="font-space-grotesk lg:leading-[120px]">
            NFTopia Animated NFTs Collection
          </Header>
          <div className="lg:absolute top-[80%] right-[10%]">
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
