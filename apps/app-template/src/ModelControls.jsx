import { useState } from "react";
import {
  Heading,
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Textarea,
  VStack,
} from "@chakra-ui/react";

function ModelControls() {
  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful assistant."
  );
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(1.0);
  return (
    <>
      <Box p={4} borderRadius="lg" boxShadow="md" bg="brand.50" w="full">
        <VStack align="stretch" spacing={6}>
          {/* System Prompt Input */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              System Prompt
            </Text>
            <Textarea
              placeholder="Set the assistant's behavior, e.g. 'You are a helpful assistant...'"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              size="sm"
              bg="white"
            />
          </Box>

          {/* Temperature Slider */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Temperature ({temperature})
            </Text>
            <Slider
              aria-label="Temperature"
              min={0}
              max={1}
              step={0.01}
              value={temperature}
              onChange={(val) => setTemperature(parseFloat(val.toFixed(2)))}
            >
              <SliderTrack>
                <SliderFilledTrack bg="brand.600" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          {/* Top P Control */}
          <Box>
            <Text fontWeight="medium" mb={2}>
              Top P ({topP})
            </Text>
            <Slider
              aria-label="Top P"
              min={0}
              max={1}
              step={0.01}
              value={topP}
              onChange={(val) => setTopP(parseFloat(val.toFixed(2)))}
            >
              <SliderTrack>
                <SliderFilledTrack bg="brand.600" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default ModelControls;
