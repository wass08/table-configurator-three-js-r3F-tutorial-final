import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    useConfigurator();
  const [opened, setOpened] = useState(window.innerWidth > 1024);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "auto",
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Button
          onClick={() => setOpened((opened) => !opened)}
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="caption">{opened ? "Close" : "Open"}</Typography>
        </Button>
        {opened && (
          <>
            <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Table width</FormLabel>
                <Slider
                  sx={{
                    width: "200px",
                  }}
                  min={50}
                  max={200}
                  value={tableWidth}
                  onChange={(e) => setTableWidth(e.target.value)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Box>
            <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Legs Layout</FormLabel>
                <RadioGroup
                  value={legs}
                  onChange={(e) => setLegs(parseInt(e.target.value))}
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Standard"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Solid"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Design"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Legs Color</FormLabel>
                <RadioGroup
                  value={legsColor}
                  onChange={(e) => setLegsColor(e.target.value)}
                >
                  <FormControlLabel
                    value={"#777777"}
                    control={<Radio />}
                    label="Black"
                  />
                  <FormControlLabel
                    value={"#ECECEC"}
                    control={<Radio />}
                    label="Chrome"
                  />
                  <FormControlLabel
                    value={"#C9BD71"}
                    control={<Radio />}
                    label="Gold"
                  />
                  <FormControlLabel
                    value={"#C9A3B9"}
                    control={<Radio />}
                    label="Pink Gold"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
      </Stack>
    </Box>
  );
};
