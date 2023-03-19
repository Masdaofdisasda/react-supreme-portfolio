import React, { useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import ProjectComponent from './components/ProjectComponent';
import useProjects from './hooks/useProjects';
import useProjectTags from './hooks/useProjectTags';
import { TagComponent } from './components/TagComponent';
import { Tag } from './Projects.types';

const Menu = styled.ul`
  list-style-type: none;
  margin: 0 0 0;
  padding: 0;
`;

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 20px;
  padding-left: 20px;
  max-width: 600px;
`;

const Projects: React.FC = () => {
  const tags = useProjectTags();
  const items = useProjects();
  const [currentTag, setCurrentTag] = useState<Tag>();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (currentTag) {
      const newItems = items.filter((item) => item.tags.includes(currentTag));
      setFilteredItems(newItems);
    }
  }, [currentTag, setCurrentTag]);

  return (
    <>
      <Header />
      <Flex flexDirection={'column'} pt={5} width={'100%'}>
        <Flex justifyContent={'center'} width={'100%'}>
          <Box width={'150'}>
            <Flex justifyContent={'end'} pt={3} pr={1}>
              <Menu>
                {tags.map((tag, index) => (
                  <li key={index}>
                    <TagComponent
                      tag={tag}
                      isSelected={currentTag === tag.tag}
                      select={setCurrentTag}
                    />
                  </li>
                ))}
              </Menu>
            </Flex>
          </Box>
          <Box width={'600px'}>
            <GridContainer>
              {filteredItems.map((item, index) => (
                <ImageItem key={index}>
                  <ProjectComponent name={item.name} image={item.image} />
                </ImageItem>
              ))}
            </GridContainer>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Projects;
