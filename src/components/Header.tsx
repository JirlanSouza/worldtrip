import { Box, Flex, Icon, IconButton, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const router = useRouter();

  return (
    <Box as="header">
      <Flex
        height={[50, 62, 100]}
        maxWidth={1440}
        marginLeft="auto"
        marginRight="auto"
        align="center"
        justify="center"
        position="relative"
      >
        {router.asPath !== "/" && (
          <IconButton
            aria-label="return"
            variant="unstyled"
            size={["xs", "md", "lg"]}
            icon={
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[16, 24, 32]}
                color="dark.text"
              />
            }
            position="absolute"
            left="2"
            onClick={() => {
              router.back();
            }}
          />
        )}

        <Img src="/logo.svg" width={[82, 120, 190]} />
      </Flex>
    </Box>
  );
}
