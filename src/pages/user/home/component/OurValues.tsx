import { Box, Center, Container, Paper, SimpleGrid, Text } from "@mantine/core";
import ValueCard from "./ValueCard";
import {
  IconCloud,
  IconHeart,
  IconMoon,
  IconStar,
  IconSun,
} from "@tabler/icons-react";
// const cards = Array.from({ length: 5}, (_, index) => index);

const CardVaueProps = [
  {
    icon: IconHeart,
    elevated: false,
    title: "Compassion",
    description:
      "We understand that seeking medicalcare can be a stressful and emotionalexperience, and we strive to create awelcoming and supportive environmentthat puts our patients at ease and everyone.",
  },
  {
    icon: IconStar,
    elevated: false,
    title: "Excellence",
    description:
      "We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
  },
  {
    icon: IconMoon,
    elevated: false,
    title: "Integrity",
    description:
      "We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.",
  },
  {
    icon: IconSun,
    elevated: false,
    title: "Respect",
    description:
      "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
  },
  {
    icon: IconCloud,
    elevated: false,
    title: "Teamwork",
    description:
      "We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.",
  },
  {
    icon: IconCloud,
    elevated: false,
    title: "Teamwork",
    description:
      "We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.",
  },
];
export default function OurValues() {
  return (
    <Box>
      <Center>
        <Text size="30px" fw="bolder" c="blue" mt={"80px"} mb={"40px"}>
          Our Values
        </Text>
      </Center>
      <Container size="xl">
        <SimpleGrid cols={3} mt="lg">
          {CardVaueProps.map((props, index) => (
            <Paper
              shadow="xl"
              radius="lg"
              mb={"lg"}
              withBorder
              key={index}
              style={{
                transform: index === 1 ? "translateY(-30px)" : "translateY(0)",
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = index === 1 ? "translateY(-40px)" : "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = index === 1 ? "translateY(-30px)" : "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
              {" "}
              <ValueCard {...props} />
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
