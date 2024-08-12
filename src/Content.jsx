import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useToast } from "@/components/ui/use-toast"


export default function Content() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 12, 2021 at 5:57 PM",
    });
  };

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>
      <button onClick={handleClick}>Show toast</button>
      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        TODO: List of liked submissions here (delete this line)
      </Typography>
    </Box>
  );
}
