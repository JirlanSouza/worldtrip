import { Box, Flex, Text } from "@chakra-ui/react";

interface ContinentAttractionProps {
  children: string;
}

export function ContinentAttraction({ children }: ContinentAttractionProps) {
  return (
    <Flex align="center" mb="6" className="attraction-item">
      <Box
        width="2"
        height="2"
        marginRight="2"
        borderRadius="50%"
        bg="highlight.100"
      />
      <Text fontSize="lg" fontWeight="medium" color="dark.text">
        {children}
      </Text>
    </Flex>
  );
}
