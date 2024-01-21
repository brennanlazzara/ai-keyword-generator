import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";

const Header = () => {
  return (
    <>
      <Image src={logo} marginBottom="1rem" width={100} alt="Logo" />
      <Heading as="span" size="xl" color="blue.600">
        AI Keyword Generator
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we&apos;ll extractor keywords for you!
      </Text>
    </>
  );
};

export default Header;
