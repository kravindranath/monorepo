import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  VStack,
  Code,
  Text,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { ModelTuner } from "@kravindranath/gpt-ui";

function Dashboard() {
  const API_HOST = "https://naturalai.azure-api.net";
  const [baseUrl] = React.useState(API_HOST);
  const [deploymentName, setDeploymentName] = React.useState("gpt4k");
  const [model, setModel] = React.useState("gpt-4");
  const apiVersionsOptions = {
    "gpt-3.5-turbo": ["15-03-2023", "10-06-2023", "25-09-2023", "05-11-2023"],
    "gpt-4": ["14-04-2023", "30-07-2023", "18-10-2023", "22-01-2024"],
    "gpt-4-1106-preview": [
      "06-11-2023",
      "10-12-2023",
      "14-01-2024",
      "05-03-2024",
    ],
    "gpt-4o": ["01-05-2024", "20-05-2024", "10-06-2024", "25-06-2024"],
    "custom-model-v2": ["12-02-2024", "01-04-2024", "30-05-2024", "20-06-2024"],
  };

  const modelOptions = Object.keys(apiVersionsOptions);
  const [availableVersions, setAvailableVersions] = React.useState(
    apiVersionsOptions[model]
  );
  const [apiVersion, setApiVersion] = React.useState(
    apiVersionsOptions[model][0]
  );
  const [maxTokens, setMaxTokens] = React.useState(3000);
  const [apiUrl, setApiUrl] = React.useState("");

  React.useEffect(() => {
    const versions = apiVersionsOptions[model] || [];
    setAvailableVersions(versions);
    setApiVersion(versions[0] || "");
  }, [model]);

  React.useEffect(() => {
    if (baseUrl && model && apiVersion && deploymentName) {
      const cleanedBaseUrl = baseUrl.replace(/\/+$/, "");
      setApiUrl(
        `${cleanedBaseUrl}/${deploymentName}/chat/completions?model=${model}&api-version=${apiVersion}`
      );
    }
  }, [baseUrl, model, apiVersion, deploymentName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generated URL:\n${apiUrl}`);
  };

  return (
    <>
      <Accordion allowMultiple defaultIndex={[0]}>
        {/* Main Configurator */}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading size="md">API URL Configurator</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch" mx="auto">
                <Box>
                  <Text fontWeight="medium">Base URL</Text>
                  <Input value={baseUrl} isDisabled />
                </Box>

                <Box>
                  <Text fontWeight="medium">Deployment Name</Text>
                  <Input
                    value={deploymentName}
                    onChange={(e) => setDeploymentName(e.target.value)}
                    required
                  />
                </Box>
                <Box>
                  <Text fontWeight="medium">Model</Text>
                  <Select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    required
                  >
                    {modelOptions.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <Text fontWeight="medium">API Version</Text>
                  <Select
                    value={apiVersion}
                    onChange={(e) => setApiVersion(e.target.value)}
                    required
                  >
                    {availableVersions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <Text fontWeight="medium">
                    Set Maximum Token Usage ({maxTokens})
                  </Text>
                  <Slider
                    aria-label="Max tokens"
                    value={maxTokens}
                    onChange={(val) => setMaxTokens(val)}
                    min={1}
                    max={10240}
                    step={10}
                  >
                    <SliderTrack>
                      <SliderFilledTrack bg="brand.600" />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <Box>
                  <Text fontWeight="medium">Generated API URL</Text>
                  <Code
                    p={2}
                    borderRadius="md"
                    display="block"
                    whiteSpace="pre-wrap"
                  >
                    {apiUrl || "Fill in details to generate the URL"}
                  </Code>
                </Box>
              </VStack>
            </form>
          </AccordionPanel>
        </AccordionItem>

        {/* System + Temperature Controls */}
        <AccordionItem mt={6}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading size="md">System & Temperature Control</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <ModelTuner />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Dashboard;
