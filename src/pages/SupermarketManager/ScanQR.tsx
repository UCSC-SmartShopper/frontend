import TextButton from "@/components/Buttons/TextButton";
import { border, Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import QrReader from "react-qr-scanner";
// import QrGen from './QrGenarator';

interface TestState {
  delay: number;
  result: string;
}

class Test extends Component<{}, TestState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      delay: 100,
      result: "Scanning...",
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps: {}, prevState: TestState) {
    console.log("Component did update");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  btn() {
    console.log("Button clicked");
  }

  handleScan(data: any) {
    if (data) {
      if (typeof data === "string") {
        this.setState({ result: data });
      } else if (data.text) {
        this.setState({ result: data.text });
      } else {
        console.log("Scanned data:", data);
        this.setState({ result: "Unknown data format" });
      }
    } else {
      console.log("No data scanned");
    }
  }

  handleError(err: any) {
    console.error("Error during scanning:", err);
  }

  render() {
    const previewStyle = {
      height: 480,
      width: 640,
    };

    return (
      <>
        <Grid templateColumns="repeat(2, 1fr)" m={5} p={5} gap={5} w={"full"}>
          <Box p={5} borderWidth={1} borderRadius="10px" boxShadow="lg">
            <Heading fontSize="2xl" color="primary" mb={2}>
              Scan QR Code Here
            </Heading>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </Box>
          <Box
            p={5}
            borderWidth={1}
            borderRadius="10px"
            boxShadow="lg"
            w={"full"}
          >
            <Box bg={"orange.100"} p={2} borderRadius={5} mb={2}>
              <Text>Order: {this.state.result}</Text>
            </Box>

            <Heading fontSize="2xl" color="primary" mb={2}>
              Order Details
            </Heading>
            <Box
              flex="1"
              p={4}
              mt={3}
              borderWidth="1px"
              borderRadius="10"
              borderColor="gray.200"
            >
              <Grid templateColumns="1fr 2fr" gap={1}>
                <Text>Order Placed On</Text>
                <Text>: 12th August 2024</Text>
                <Text>Payment Method</Text>
                <Text>: Credit Card</Text>
                <Text>Order Total</Text>
                <Text>: $150.00</Text>
                <Text>Delivery Cost</Text>
                <Text>: $5.00</Text>
                <Text>Shipping Address</Text>
                <Text>: 1234 Elm Street, Springfield, IL</Text>
              </Grid>
            </Box>
            <Box
              flex="1"
              p={4}
              mt={3}
              borderWidth="1px"
              borderRadius="10"
              borderColor="gray.200"
            >
              <Text fontSize="lg" fontWeight="bold" color="primary" mb={2}>
                Driver Details
              </Text>
              <Grid templateColumns="1fr 2fr" gap={1}>
                <Text>Driver name</Text>
                <Text>: Nethmi Kaveesha</Text>
                <Text>Contact Number</Text>
                <Text>: 071122244</Text>
                <Text>Vehicle Type</Text>
                <Text>: Bike</Text>
                <Text>Vehicle Number</Text>
                <Text>: BAY 5050</Text>
              </Grid>
            </Box>
            <TextButton
              text="View Order"
              hoverColor="primary"
              onClick={() => this.btn}
            />
          </Box>
        </Grid>
      </>
    );
  }
}

export default Test;
