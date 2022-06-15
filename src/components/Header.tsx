import { Flex, Icon, IconButton, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      height={50}
      maxWidth={1440}
      align="center"
      justify="center"
      position="relative"
    >
      {router.asPath !== "/" && (
        <IconButton
          aria-label="return"
          variant="unstyled"
          icon={<Icon as={RiArrowLeftLine} color="dark.text" />}
          position="absolute"
          left="2"
          onClick={() => {
            router.back();
          }}
        />
      )}

      <Img src="/logo.svg" width="20" />
    </Flex>
  );
}
