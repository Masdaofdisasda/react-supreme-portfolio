import React, { useState } from 'react';
import Page from '../../components/Page';
import { Box, Flex, Image, Text } from 'rebass';
import { Thumbnail } from './components/Thumbnail';
import { useParams } from 'react-router-dom';
import useFetchProject from '../../hooks/useFetchProject';

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = useFetchProject(id);
  const [selectedImage, setSelectedImage] = useState(
    project?.images.at(0) ?? ''
  ); // todo add fallback image?

  if (!project) {
    return <div>ERROR</div>;
  }

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
                {project.projectName}
              </Text>
              <Flex>
                {project.technologies.map((technology) => (
                  <Text
                    fontFamily={'Courier New'}
                    fontSize={12}
                    fontWeight={'bold'}
                    mr={2}
                  >
                    {technology}
                  </Text>
                ))}
              </Flex>
              <Text fontFamily={'Courier New'} fontSize={12} pt={3}>
                {project.description}
              </Text>
              <Flex mt={2}>
                {project.images.map((image) => (
                  <Thumbnail
                    imgSrc={image}
                    onClick={setSelectedImage}
                    selected={image === selectedImage}
                  />
                ))}
              </Flex>
              <Text fontFamily={'Courier New'} fontSize={16}>
                {project.price}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Page>
  );
};
