import img1 from '../images/trafficSignRecogniton1.png';
import img2 from '../images/trafficSignRecogniton2.png';
import img3 from '../images/trafficSignRecogniton3.png';
import { Text } from 'rebass';

const streetSignRecognition = {
  id: 'streetSignRecognition',
  projectName: 'Signage Recognition',
  images: [img1, img2, img3],
  tags: ['CV'],
  technologies: ['Matlab'],
  price: 128,
  description: (
    <Text>
      Never miss a turn to your favorite tavern again! Our ingenious navigation
      tool aims to enhance traditional GPS guidance and ensure you always find
      your way.
      <br />
      <br />
      Providing a video and the name of your desired destination as inputs, our
      program searches for signs that point to your chosen location. We analyze
      each video frame, employing Region Growing to identify potential signs.
      Connected component labeling and OCR come into play to extract text from
      the signs, which we then compare to the input using Levenshtein distance.
      Lastly, Template Matching helps us determine the direction indicated by
      the sign.
      <br />
      <br />
      In this group effort, my primary responsibility revolved around detecting
      potential signs. By converting each detected sign into a binary image and
      numbering connected components, I built bounding boxes around each
      component. I identified overlapping bounds and merged them to form
      complete words. The resulting image segments were easily fed into an OCR
      function to extract text, effectively bringing us one step closer to
      guiding you in the right direction.
    </Text>
  ),
};

export default streetSignRecognition;
