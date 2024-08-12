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
import { createMockFormSubmission,saveLikedFormSubmission,onMessage } from './service/mockServer';
import { useStore } from './store/store';

export default function Header() {
  const { toast } = useToast();
  const { formSubmissionList, setFormSubmissionList } = useStore();




  const handleNewSubmissionClick = () => {
   
    createMockFormSubmission();
    onMessage((formData) => {
      toast({
        title: `Email from: ${formData.data.email}`,
        description: `Written by: ${formData.data.firstName} ${formData.data.lastName}.`,
        primaryAction: <Button size="icon" variant="success" onClick={() => saveLikedFormSubmission(submission)}><ThumbsUp /></Button>,
       });
      //  save this in local storage
      // create a new submission object
      const submissionItemForLocalStorage = {
        id: formData.id,
        data: formData.data
      }
      localStorage.setItem('formSubmissions', JSON.stringify(submission));
    });
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
            Toast Exercise
          </Typography>
          <Button
            variant="contained"
            size="small"
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
