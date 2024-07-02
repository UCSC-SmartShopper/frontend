import { Box, Flex, Text } from "@chakra-ui/react";

interface ActivityProps {
  description: string;
  date: string;
  time: string;
}

const ActivityRow = ({ description, date, time }: ActivityProps) => {
  return (
    <Box
      w="full"
      px={4}
      py={2}
      borderWidth={0.7}
      borderColor="gray.300"
      className="activity-row"
      _hover={{
        borderColor: "primary",
        borderLeftWidth: 10,
        cursor: "pointer",
        color: "primary",
      }}
    >
      <Flex justify="space-between" align="stretch">
        <Text fontSize="lg" fontWeight="sm" color="gray.500">
          {description}
        </Text>
        <Box textAlign="right" whiteSpace="nowrap" flexShrink={0}>
          <Text fontSize="sm" color="gray.400">
            {date}
          </Text>
          <Text fontSize="sm" color="gray.400">
            {time}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ActivityRow;
