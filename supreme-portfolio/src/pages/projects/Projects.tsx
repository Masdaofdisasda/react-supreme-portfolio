import React from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import ProjectComponent from './components/ProjectComponent';
import useProjects from './hooks/useProjects';

const Menu = styled.ul`
  list-style-type: none;
  margin: 0 0 0;
  padding: 0;
`;

const CategoryItem = styled(Text)`
  &:hover {
    background-color: red;
    color: white;
  }
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
`;

const Projects: React.FC = () => {
  const categories = [
    'all',
    'comp. vis',
    'comp. graphics',
    'sw engineering',
    'web dev',
    'ui design',
    'music',
    'game dev',
  ];

  const items = useProjects();

  return (
    <div>
      <Header />
      <Flex flexDirection={'column'} px={3} pt={5}>
        <Flex>
          <Box width={'20%'}>
            <Flex justifyContent={'end'} px={3}>
              <Menu>
                {categories.map((item, index) => (
                  <li key={index}>
                    <CategoryItem
                      fontFamily={'Courier New'}
                      fontSize={12}
                      color={'black'}
                      justifyContent={'end'}
                      textAlign={'right'}
                    >
                      {item.toLowerCase()}
                    </CategoryItem>
                  </li>
                ))}
              </Menu>
            </Flex>
          </Box>
          <Box width={'70%'}>
            <GridContainer>
              {items.map((item, index) => (
                <ImageItem key={index}>
                  <ProjectComponent name={item.name} image={item.image} />
                </ImageItem>
              ))}
            </GridContainer>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};

export default Projects;
