import { Button, Heading, Input, Text, VStack } from "@chakra-ui/react";

interface HomeProps {
  rate: {
    id: string;
    value: number;
  };
}

function Home(props: HomeProps) {
  const currentRate = props.rate.value;

  return (
    <VStack
      align={"center"}
      justify={"center"}
      spacing={"8"}
      bg={"black"}
      h="calc(100vh)"
    >
      <Heading color={"white"}>Welcome to Parkit! 🚗</Heading>
      <Text color={"white"}>
        Please enter your license plate to purchase a ticket.
      </Text>
      <Text color={"pink.400"}>Current rate: ${currentRate}</Text>
      <Input
        color={"white"}
        focusBorderColor="pink.400"
        placeholder="License plate"
        size="lg"
        w={"sm"}
        colorScheme={"whiteAlpha"}
      />
      <Button colorScheme={"pink"} size={"lg"} w={"sm"}>
        Submit
      </Button>
    </VStack>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/rate");
  const data = await res.json();

  return {
    props: {
      rate: data.rate,
    },
  };
}

export default Home;
