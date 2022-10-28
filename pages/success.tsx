import { VStack, Heading, Text } from "@chakra-ui/react";

function Success() {
  return (
    <VStack
      align={"center"}
      justify={"center"}
      spacing={"8"}
      bg={"black"}
      h="calc(100vh)"
    >
      <Heading color={"white"}>You are good to go! ✅</Heading>
      <Text color={"white"}>
        Your payment was successful. Thanks for using Parkit 🚗
      </Text>
    </VStack>
  );
}

export default Success;
