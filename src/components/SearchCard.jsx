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
    <div className="mx-auto max-w-4xl -mt-5 px-4">
      <Paper elevation={4} square={false} className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Search Property</h2>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          // Keep MUI sx for internal layout if desired. Avoid mixing too many Tailwind classes on MUI internals.
          sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
        >
          <TextField required id="location" label="Location" sx={{ minWidth: 160 }} />
          <TextField id="minPrice" label="Min Price" sx={{ minWidth: 160 }} />
          <TextField id="maxPrice" label="Max Price" sx={{ minWidth: 160 }} />
          <div className="w-full mt-4 flex justify-end">
            <Button variant="contained" type="submit">Search</Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
}
