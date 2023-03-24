import styled from 'styled-components';
import { FaGithub, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { Box } from 'rebass';

const SocialMediaRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialMediaLink = styled.a`
  color: dimgray;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const SocialLinks = () => {
  return (
    <Box pt={4}>
      <SocialMediaRow>
        <SocialMediaLink
          href="https://www.instagram.com/dkppl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.youtube.com/channel/UCcp1Bh7cQ8_QiOccY7gAXcw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://github.com/Masdaofdisasda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://open.spotify.com/artist/3PLuaCTHQf9NDJP4E5bfrh?si=F5nNyMLSRBWt30DjB5qZ8A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </SocialMediaLink>
      </SocialMediaRow>
    </Box>
  );
};
