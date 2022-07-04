import { Flex, Img, Text } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Flex
      direction="column"
      backgroundImage="/homeBannerBackground.png"
      px="4"
      py="8"
    >
      {/* <Img src="/homeBannerBackground.png" /> */}
      <Text as="h2" fontSize="xl" fontWeight="medium" color="light.text">
        5 Continents,
      </Text>
      <Text as="h2" fontSize="xl" fontWeight="medium" color="light.text" pb="4">
        infinitas possibilidades.
      </Text>

      <Text fontSize="sm" color="light.info">
        Chegou a hora de tirar do papel a viagem que voçê sempre sonhou.
      </Text>
    </Flex>
  );
}
