import { Heading, Center, Text } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <>
      <Heading>Heading before Center</Heading>
      <Center padding={20}>
        <Heading>No error</Heading>
        <Text>shows no hydration error</Text>
      </Center>
    </>
  );
}
