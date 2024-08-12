import React from "react";
import { useState, useRef, useEffect } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Delete } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Content() {
  const { toast } = useToast();
  const [parent, enableAnimations] = useAutoAnimate();
  
  const handleDeleteSubmission = (submission) => {
    const updatedSubmissions = formSubmissions.filter(
      (s) => s.id !== submission.id
    );
    localStorage.setItem("formSubmissions", JSON.stringify(updatedSubmissions));
    toast({
      title: "Submission Deleted",
      description: "This submission has been deleted.",
    });
  };

  const formSubmissions =  JSON.parse(localStorage.getItem("formSubmissions")) || [];

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      {formSubmissions && (
        <div ref={parent} className="grid grid-cols-3 gap-4 mt-10">
          {formSubmissions.map((submission, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col gap-2 relative"
            >
              <Button
                className="absolute top-4 right-4"
                size="icon"
                variant="destructive"
                onClick={() => handleDeleteSubmission(submission)}
              >
                <Delete className="w-4 h-4" />
              </Button>
              <span className="text-sm font-semibold text-foreground">
                Email:{" "}
                <span className="font-normal text-foreground/70">
                  {submission.data.email}
                </span>
              </span>
              <span className="text-sm font-semibold text-foreground">
                First Name:{" "}
                <span className="font-normal text-foreground/70">
                  {submission.data.firstName}
                </span>
              </span>
              <span className="text-sm font-semibold text-foreground">
                Last Name:{" "}
                <span className="font-normal text-foreground/70">
                  {submission.data.lastName}
                </span>
              </span>
              <span className="text-sm font-semibold text-foreground">
                Liked:{" "}
                <span className="font-normal text-foreground/70">
                  {submission.liked ? "Yes" : "No"}
                </span>
              </span>
            </Card>
          ))}
        </div>
      )}
    </Box>
  );
}
