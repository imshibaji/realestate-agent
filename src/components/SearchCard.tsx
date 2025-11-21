// src/components/SearchCard.jsx
import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function SearchCard() {
  return (
    // Use a Tailwind wrapper to control spacing/positioning.
    <div className="mx-auto max-w-7xl -mt-5 px-4">
      <Paper elevation={4} className="p-4 !rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Search Property</h2>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          // Keep MUI sx for internal layout if desired. Avoid mixing too many Tailwind classes on MUI internals.
          className="flex w-full gap-3"
        >
          <TextField required id="location" label="Location" className="w-full" />
          <TextField id="minPrice" label="Min Price" className="w-full" />
          <TextField id="maxPrice" label="Max Price" className="w-full" />
          <Button className="w-80" variant="contained" type="submit">Search</Button>
        </Box>
      </Paper>
    </div>
  );
}
