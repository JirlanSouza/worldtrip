import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ContinentAttractionProps {
  imageSrc: string;
  children: string;
}

export function ContinentAttraction({
  imageSrc,
  children,
}: ContinentAttractionProps) {
  const isMediumWide = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      direction={isMediumWide ? "column" : "row"}
      align="center"
      justify="center"
      mb="6"
      className="attraction-item"
    >
      {!isMediumWide ? (
        <Box
          width="2"
          height="2"
          marginRight="2"
          borderRadius="50%"
          bg="highlight.100"
        />
      ) : (
        <Image
          width="85"
          marginBottom={6}
          src={imageSrc}
          alt="attraction icon"
        />
      )}
      <Text
        fontSize={{ base: "lg", lg: "2xl" }}
        fontWeight="medium"
        color="dark.text"
      >
        {children}
      </Text>
    </Flex>
  );
}
