import React from 'react';

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
import { useStore } from './store/store';
import { useEffect } from 'react';


export default function Header() {
  const { toast } = useToast();

  const handleLikedSubmissionClick = async (formData) => {
    const finalFormData = {
      ...formData,
      liked: true,
    };
    try {
      await saveLikedFormSubmission(finalFormData);
      toast({
        title: 'Liked Submission!',
        description: 'This has been saved in local storage.',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Sorry, our server is VERY old and sometimes fails.',
        description: 'Failed to save the liked submission. Please try again.',
        variant: 'destructive',
      });
      console.error('Error saving liked submission:', error);
    }
  }

  const handleNewSubmissionClick = () => {
    try {
      createMockFormSubmission();
      onMessage((formData) => {
        toast({
          title: `Email from: ${formData.data.email}`,
          description: `Written by: ${formData.data.firstName} ${formData.data.lastName}.`,
          primaryAction: <Button size="icon" variant="success" onClick={() => handleLikedSubmissionClick(formData)}><ThumbsUp /></Button>,
        });
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create a new submission. Please try again.',
        variant: 'destructive',
      });
      console.error('Error creating new submission:', error);
    }
  };


  console.log(localStorage.getItem('formSubmissions'));


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
            Toast Exercise
          </Typography>
          <Button
            variant="default"
          
            color="secondary"
            onClick={() => handleNewSubmissionClick()}
          >
            New Submission
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
