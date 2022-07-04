import {
  Box,
  Flex,
  Image,
  Img,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";

export function HomeBanner() {
  const isWide = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      backgroundImage="/homeBannerBackground.png"
      backgroundPosition="center"
      backgroundSize={{ base: "auto", xl: "100%" }}
      justify="center"
      px={4}
      marginBottom={16}
    >
      <Flex maxWidth={1240} flex={1} justify="space-between">
        <Box maxWidth="520" pb="4" py={["8", "8", "16"]}>
          <Text
            as="h2"
            fontSize={["xl", "3xl", "4xl"]}
            fontWeight="medium"
            color="light.text"
          >
            5 Continents,
          </Text>
          <Text
            as="h2"
            fontSize={["xl", "3xl", "4xl"]}
            fontWeight="medium"
            color="light.text"
          >
            infinitas possibilidades.
          </Text>

          <Text fontSize={["sm", "md", "xl"]} color="light.info">
            Chegou a hora de tirar do papel a viagem que voçê sempre sonhou.
          </Text>
        </Box>
        {isWide && (
          <Image
            alignSelf="flex-end"
            height={{ md: "200", lg: "270" }}
            marginLeft={4}
            marginBottom={-6}
            src="./airplane.svg"
            alt="airplane"
          />
        )}
      </Flex>
    </Flex>
  );
}
