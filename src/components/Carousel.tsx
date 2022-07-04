import { Box, Flex, HStack, IconButton, Img, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export type Continent = {
  id: string;
  name: string;
  about: string;
  imageUrl: string;
};

interface CarouselProps {
  continents: Continent[];
}

export function Carousel({ continents }: CarouselProps) {
  const swiper = useSwiper();

  return (
    <Box
      sx={{
        "--swiper-theme-color": "colors.highlight.100",
        "--swiper-pagination-bullet-inactive-color": "colors.dark.info.100",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <>
          {continents.map(({ id, name, imageUrl, about }, index) => {
            return (
              <SwiperSlide key={name}>
                <Box position="relative">
                  <Img src={imageUrl} />

                  <Flex
                    position="absolute"
                    top="0"
                    flexDir="column"
                    align="center"
                    justify="center"
                    width="100%"
                    height="100%"
                    color="light.text"
                    background="rgba(3,3,3, 0.45)"
                  >
                    <Link href={`/continent/${id}`}>
                      <Flex as="a" direction="column" align="center">
                        <Text fontSize="2xl" fontWeight="bold">
                          {name}
                        </Text>
                        <Text
                          fontSize="md"
                          fontWeight="bold"
                          textAlign="center"
                          maxWidth={300}
                        >
                          {about}
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                </Box>
              </SwiperSlide>
            );
          })}
        </>
      </Swiper>
    </Box>
  );
}
