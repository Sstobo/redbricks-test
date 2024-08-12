import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useStore } from "./store/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete } from "lucide-react";


export default function Content() {
  const { toast } = useToast();



  // get form submissions from local storage
  const formSubmissions =
    JSON.parse(localStorage.getItem("formSubmissions")) || [];
  console.log(formSubmissions);

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      {formSubmissions && (
        <div className="flex flex-col gap-4 mt-4">
          {formSubmissions.map((submission, index) => (
            <Card key={index} className="max-w-[300px] p-6 flex flex-col gap-2 relative">
              <Button className="absolute top-4 right-4" size="icon" variant="destructive" onClick={() => handleDeleteSubmission(submission)}><Delete className="w-4 h-4" /></Button>
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
