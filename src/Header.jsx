import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from '@/components/ui/button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useToast } from "@/components/ui/use-toast"
import { ThumbsUp } from "lucide-react"
import { createMockFormSubmission, saveLikedFormSubmission, onMessage } from './service/mockServer';

export default function Header() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLikedSubmissionClick = async (formData) => {
    setIsLoading(true);
    const finalFormData = {
      ...formData,
      data: {
        ...formData.data,
        liked: true,
      },
    };
    try {
      await saveLikedFormSubmission(finalFormData);
      toast({
        title: 'Liked Submission!',
        description: 'This has been saved in local storage.',
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: 'Sorry, our server is VERY old and sometimes fails.',
        description: 'Failed to save the liked submission. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
      console.error('Error saving liked submission:', error);
      
    }
   
  }

  const handleNewSubmissionClick = () => {
    setIsLoading(true);
    try {
      createMockFormSubmission();
      onMessage((formData) => {
        toast({
          title: `Email from: ${formData.data.email}`,
          description: `Written by: ${formData.data.firstName} ${formData.data.lastName}.`,
          primaryAction: <Button disabled={isLoading} size="icon" variant="success" onClick={() => handleLikedSubmissionClick(formData)}><ThumbsUp className="w-4 h-4" /></Button>,
        });
      });
      setIsLoading(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create a new submission. Please try again.',
        variant: 'destructive',
      });
      console.error('Error creating new submission:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{marginRight: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>
            Toast Exercise, By Sean Stobo 2024
          </Typography>
          <Button
            variant="default"
            disabled={isLoading}
            color="secondary"
            onClick={() => {
              setIsLoading(true);
              handleNewSubmissionClick();
            }}
          >
          
            {isLoading ? 'Loading...' : 'New Submission'}

          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
