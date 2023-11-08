import React from "react";
import Container from "../Shared/Container/Container";
import { Header, Text } from "../Shared/Typography/Typography";
import Button from "../Shared/Button/Button";

const Herobanner = () => {
  return (
    <div className="hero-spiral">
      <Container>
        <div className="w-full lg:w-[85%] mt-[6rem]">
          <div className="flex relative">
            <Header className="font-space-grotesk lg:leading-[120px]">
              NFTopia
            </Header>
            <div>
              <span className=" absolute top-12 2xl:right-[12%] hidden lg:block">
                <Text variant="small" className="text-[#767474] font-kanit">
                  Experience the Power of NFTs for Ownership and Authenticity.
                </Text>
              </span>
              <span className=" absolute top-20 2xl:right-[30%] font-kanit hidden lg:block">
                <Text variant="small" className="text-[#767474]">
                  Invest in the Future of Digital Art with NFTs.
                </Text>
              </span>
            </div>
          </div>
          <Header className="font-space-grotesk lg:leading-[120px]">
            Animated NFTs
          </Header>
          <div className="lg:flex block">
            <Header className="font-space-grotesk lg:leading-[120px]">
              Collection
            </Header>
            <div className="mt-10 ml-16">
              <Button>
                <Text variant="small" className="font-bold">
                  Explore
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Herobanner;
