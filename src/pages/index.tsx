import { Box, Center, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Carousel, Continent } from "../components/Carousel";
import { ContinentAttraction as ContinentAttraction } from "../components/ContinentAttraction";
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { dataFetch } from "../services/dataFetch";

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Box paddingBottom={["6", "8"]}>
      <Header />
      <HomeBanner />

      <Box maxWidth={1240} marginLeft="auto" marginRight="auto">
        <SimpleGrid px="4" pt="8" columns={[2, 4, 5]} mb={["4", "6", "8"]}>
          <ContinentAttraction imageSrc="./cocktail.svg">
            vida noturna
          </ContinentAttraction>
          <ContinentAttraction imageSrc="./surf.svg">praia</ContinentAttraction>
          <ContinentAttraction imageSrc="./building.svg">
            moderno
          </ContinentAttraction>
          <ContinentAttraction imageSrc="./museum.svg">
            clássico
          </ContinentAttraction>
          <ContinentAttraction imageSrc="./earth.svg">
            e mais...
          </ContinentAttraction>
        </SimpleGrid>

        <Center mb={["4", "6", "8"]}>
          <Divider width="16" color="dark.text" />
        </Center>

        <Flex direction="column" align="center" mb={["4", "6", "8"]}>
          <Text
            fontSize={["xl", "3xl", "4xl"]}
            fontWeight="medium"
            color="dark.text"
          >
            Vamos nessa?
          </Text>
          <Text
            fontSize={["xl", "3xl", "4xl"]}
            fontWeight="medium"
            color="dark.text"
          >
            Então escolha seu continente
          </Text>
        </Flex>

        <Carousel continents={continents} />
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const continents = dataFetch.get<Continent[]>("continents");

  return {
    props: {
      continents,
    },
  };
};
