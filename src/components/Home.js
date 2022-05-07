import { Image } from '@chakra-ui/react';
import img from '../assets/images/Netflix-Background.jpg';

export default function Home() {
  return <Image src={img} alt='movies_bg'  w='100%' h='87vh'   objectFit='cover' />;
}
