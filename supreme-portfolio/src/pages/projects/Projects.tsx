import React, { useEffect, useState } from 'react';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import ProjectComponent from './components/ProjectComponent';
import useProjects from './hooks/useProjects';
import useProjectTags from './hooks/useProjectTags';
import { TagComponent } from './components/TagComponent';
import { Tag } from './Projects.types';
import Page from '../../components/Page';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    <Page>
      <Flex flexDirection={'column'} pt={5} width={'100%'}>
        <Flex justifyContent={'center'} width={'100%'}>
          <Box width={'150'}>
            <Flex justifyContent={'end'} pt={3} pr={1}>
              <ListContainer>
                {tags.map((tag) => (
                  <TagComponent
                    tag={tag}
                    isSelected={currentTag === tag.tag}
                    select={setCurrentTag}
                  />
                ))}
              </ListContainer>
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
    </Page>
  );
};

export default Projects;
