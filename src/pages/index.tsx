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
    <Box paddingBottom="6">
      <Header />
      <HomeBanner />

      <Flex justify="space-evenly" px="4" pt="8" wrap="wrap">
        <ContinentAttraction>vida noturna</ContinentAttraction>
        <ContinentAttraction>praia</ContinentAttraction>
        <ContinentAttraction>moderno</ContinentAttraction>
        <ContinentAttraction>clássico</ContinentAttraction>
        <ContinentAttraction>e mais...</ContinentAttraction>
      </Flex>

      <Center mb="4">
        <Divider width="16" color="dark.text" />
      </Center>

      <Flex direction="column" align="center" marginBottom="4">
        <Text fontSize="xl" fontWeight="medium" color="dark.text">
          Vamos nessa?
        </Text>
        <Text fontSize="xl" fontWeight="medium" color="dark.text">
          Então escolha seu continente
        </Text>
      </Flex>

      <Carousel continents={continents} />
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
