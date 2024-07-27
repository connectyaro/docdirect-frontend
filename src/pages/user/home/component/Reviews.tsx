import {
  Avatar,
  Container,
  Flex,
  SimpleGrid,
  Text,
  Timeline,
  Image,
  Rating,
  Group,
} from "@mantine/core";
import avatarImage1 from "../../../../assets/avatar_1.png.png";
import avatarImage2 from "../../../../assets/avatar_2.png.png";
import avatarImage3 from "../../../../assets/avatar_3.png.png";
import messaage from "../../../../assets/quote.svg fill.png";

import { IconMessageDots } from "@tabler/icons-react";
import { useState } from "react";
export default function Reviews() {
 

  const reviews = [
    {
      id: 1,
      text: "The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received.",
      rating: 4,
      avatar: avatarImage1,
      name: "PAULO HUBERT",
      location: "New York, USA",
    },
    {
      id: 2,
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium ipsum consectetur ipsam eveniet eligendi dolore numquam omnis, perferendis quam corrupti maiores illo assumenda atque fugiat cumque molestias. Veritatis, aliquid.",
      rating: 5,
      avatar: avatarImage2,
      name: "PAULO HUBERT",
      location: "New York, USA",
    },
    {
      id: 3,
      text: "The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. ",
      rating: 3,
      avatar: avatarImage3,
      name: "PAULO HUBERT",
      location: "New York, USA",
    },
  ];
  const [selectedReview, setSelectedReview] = useState(reviews[0].id)

  
  const handleReviewClick = (id:number) => {
    setSelectedReview(id);
  };

  const selectedData = reviews.find(r => r.id === selectedReview);
  return (
    <Container size="xl" my="xl" mt="50px">
      <Flex direction="column" align="center">
        <Text fw="bold" size="30px" c="blue">
          Some Reviews
        </Text>
        <Text size="18px" c="blue">
          Of our clients
        </Text>
      </Flex>
      <SimpleGrid cols={2} >
      <Timeline active={3} bulletSize={24}  lineWidth={2} mt="lg" align="right" p={"lg"}
       styles={
        {
          root:  { width:"100%"
      
       
      },
      
      }}
        >
          {reviews.map((review,index) => (
            <Timeline.Item p={"lg"} 
              key={review.id}
              onClick={() => handleReviewClick(review.id)}
              bullet={<IconMessageDots size={12} />}
              lineVariant={selectedReview === review.id ? 'dashed' : 'solid'}
              styles={
                {
                itemContent:  { 
                marginRight:"20px",
                padding:"10px",
                marginInlineStart: index === 1 ? "50px":"none",
                cursor: 'pointer',
                border: selectedReview === review.id ? '2px solid #1a73e8' : 'none',
                borderRadius: selectedReview === review.id ? '10px' : 'none',
              },
              
              }}
            >
              <Flex align="center">
                <Avatar variant="filled" radius="xl" size="lg" src={review.avatar} />
                <Flex direction="column" ps="lg">
                  <Text fw="bold" size="lg" c="blue">
                    {review.name}
                  </Text>
                  <Text c="blue">{review.location}</Text>
                </Flex>
              </Flex>
            </Timeline.Item>
          ))}
        </Timeline>
        {selectedData && (
          <Flex direction="column" justify={"center"} align="center" p="xl" h="100%">
            <Flex direction="column" mt="lg">
              <Image src={messaage} w="30px" />
              <Group ms="50px">
                <Text>{selectedData.text}</Text>
                <Rating defaultValue={selectedData.rating} color="indigo" count={5} />
              </Group>
            </Flex>
          </Flex>
        )}
      </SimpleGrid>
    </Container>
  );
}