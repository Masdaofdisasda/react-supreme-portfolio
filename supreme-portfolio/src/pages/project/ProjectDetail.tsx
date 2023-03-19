import React, { useState } from 'react';
import Page from '../../components/Page';
import { Box, Flex, Image, Text } from 'rebass';
import { Thumbnail } from './components/Thumbnail';

export const ProjectDetail = () => {
  const [selectedImage, setSelectedImage] = useState(
    'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302'
  );

  const images = [
    'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
    'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/J16_SS23_FlockedDistressedTrucker_Gold02_720x.jpg?v=1678824947',
    'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/J16_SS23_FlockedDistressedTrucker_Red_D01_720x.jpg?v=1678900524',
  ];

  return (
    <Page>
      <Flex justifyContent={'center'} pt={5}>
        <Flex width={'800px'}>
          <Box width={3 / 5}>
            <Image src={selectedImage} alt="Item image" width={'100%'} />
          </Box>
          <Box width={2 / 5} pl={2}>
            <Flex flexDirection={'column'}>
              <Text fontFamily={'Courier New'} fontSize={16}>
                Place project name here
              </Text>
              <Text
                fontFamily={'Courier New'}
                fontSize={12}
                fontWeight={'bold'}
              >
                list tags and technologies
              </Text>
              <Text fontFamily={'Courier New'} fontSize={12} pt={3}>
                This is a sample description for the World Famous Hooded
                Sweatshirt. You can update this description with the actual
                product details.
              </Text>
              <Flex mt={2}>
                {images.map((image) => (
                  <Thumbnail
                    imgSrc={image}
                    onClick={setSelectedImage}
                    selected={image === selectedImage}
                  />
                ))}
              </Flex>
              <Text fontFamily={'Courier New'} fontSize={16}>
                $128
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Page>
  );
};
