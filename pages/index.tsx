import { Center, Heading, Input, Text, VStack } from "@chakra-ui/react";

function Home() {
  return (
    <VStack
      align={"center"}
      justify={"center"}
      spacing={"8"}
      bg={"black"}
      h="calc(100vh)"
    >
      <Heading color={"white"}>🚗 Welcome to Parkit!</Heading>
      <Text color={"white"}>Please enter your license plate to continue</Text>
      <Input
        color={"white"}
        focusBorderColor="pink.400"
        placeholder="large size"
        size="lg"
        w={"sm"}
        colorScheme={"whiteAlpha"}
      />
    </VStack>
  );
}

export default Home;
