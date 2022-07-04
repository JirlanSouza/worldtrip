import {
  Box,
  Flex,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { dataFetch } from "../../services/dataFetch";

interface ContinentProps {
  continent?: Continent;
}

type Continent = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  countryQuantity: number;
  languagesQuantity: number;
  cityQuantityInMostPopularDestinations: number;
  citiesInMostPopularDestinations: CityPopularDestination[];
};

type CityPopularDestination = {
  name: string;
  imageUrl: string;
  countyName: string;
  countryFlagUrl: string;
};

export default function Continent({ continent }: ContinentProps) {
  function toFirstLetterUpperCase(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  if (!continent) {
    return (
      <>
        <Header />
        <Flex width="100%" marginTop="4" align="center" justify="center">
          <Text>Sem dados para este continente.</Text>
        </Flex>
      </>
    );
  }

  return (
    <Box paddingBottom={8}>
      <Header />
      <Box position="relative" height="150" overflow="hidden">
        <Flex
          align="center"
          justify="center"
          position="absolute"
          width="100%"
          height="100%"
          background="rgba(3,3,3, 0.2)"
        >
          <Text fontSize="3xl" fontWeight="semibold" color="light.white">
            {toFirstLetterUpperCase(continent.name)}
          </Text>
        </Flex>
        <Img src={continent.imageUrl} />
      </Box>
      <Stack gap="6" marginTop={4} px={4}>
        <Flex>
          <Text fontSize="md" textAlign="justify">
            {continent.description}
          </Text>
        </Flex>

        <Flex justify="space-around">
          <Flex flexDirection="column">
            <Text fontSize="3xl" fontWeight="semibold" color="highlight.100">
              {continent.countryQuantity}
            </Text>
            <Text fontSize="lg" fontWeight="normal" color="dark.text" as="span">
              países
            </Text>
          </Flex>

          <Flex flexDirection="column">
            <Text fontSize="3xl" fontWeight="semibold" color="highlight.100">
              {continent.languagesQuantity}
            </Text>
            <Text fontSize="lg" fontWeight="normal" color="dark.text" as="span">
              línguas
            </Text>
          </Flex>

          <Flex flexDirection="column">
            <Text fontSize="3xl" fontWeight="semibold" color="highlight.100">
              {continent.cityQuantityInMostPopularDestinations}
            </Text>
            <Text fontSize="lg" fontWeight="normal" color="dark.text" as="span">
              cidades +100
            </Text>
          </Flex>
        </Flex>

        <Text
          fontSize="x-large"
          fontWeight="medium"
          color="dark.text"
          marginBottom={4}
        >
          Cidades +100
        </Text>
        <SimpleGrid
          gap={16}
          columns={[1, 2, 3, 4]}
          alignItems="center"
          justifyContent="center"
        >
          {continent.citiesInMostPopularDestinations.map((city) => {
            return (
              <Box
                key={city.name}
                maxWidth={300}
                minW={220}
                height={280}
                borderWidth={2}
                borderColor="highlight.50"
                borderRadius={8}
                overflow="hidden"
                margin="auto"
              >
                <Image
                  src={city.imageUrl}
                  alt="city"
                  width="100%"
                  maxHeight={180}
                />

                <Flex padding={6} align="center" justify="space-between">
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" color="dark.text">
                      {city.name}
                    </Text>
                    <Text
                      fontSize="medium"
                      fontWeight="medium"
                      lineHeight={8}
                      color="dark.info.100"
                    >
                      {city.countyName}
                    </Text>
                  </Box>
                  <Image
                    width={8}
                    height={8}
                    borderRadius="50%"
                    src={city.countryFlagUrl}
                    alt="county flag"
                  />
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          continent: "",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ContinentProps> = ({ params }) => {
  const continentId = params["continent"];
  const continent =
    dataFetch.get<Continent>(`continent/${continentId}`) || null;

  return {
    props: {
      continent,
    },
  };
};
