import { Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

interface HomeProps {
  rate: {
    id: string;
    value: number;
  };
}

function Home(props: HomeProps) {
  const currentRate = props.rate;
  const [licensePlate, setLicensePlate] = useState("");
  const router = useRouter();

  async function submitData() {
    const body = {
      rateId: currentRate.id,
      licensePlate: licensePlate,
    };

    const res = await fetch("http://localhost:3000/api/ticket", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resBody = await res.json();
    router.replace(resBody.url);
  }

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
      <Text color={"pink.400"}>Current rate: ${currentRate.value}</Text>
      <Input
        color={"white"}
        onChange={(e) => setLicensePlate(e.target.value)}
        focusBorderColor="pink.400"
        placeholder="License plate"
        size="lg"
        w={"sm"}
        colorScheme={"whiteAlpha"}
      />
      <Button
        onClick={() => submitData()}
        value={licensePlate}
        colorScheme={"pink"}
        size={"lg"}
        w={"sm"}
      >
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
