import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Help, School, Work } from "@material-ui/icons";
const timeLines = [
  {
    title : "Licence",
    description : [
      {
        id:1,
        label :"2019-2020: Mathematique et technologie"
      },
      {
        id:2,
        label :"2020-2021: Mathematique et technologie"
      }
    ],
    icon : <School />
  },
  {
    title : "Licence",
    description : [
      {
        id:1,
        label :"2021-2022: Mathematiques Informatique et Statistiques Appliquées"
      }
    ],
    icon : <School />
  },
  {
    title : "Freelance",
    description : [
      {
        id:1,
        label :"1 mois : Dévelopeur ReactTs (styled-Component) "
      }
    ],
    icon : <Work/>
  },
  {
    title : "Formateur AEMISA",
    description : [
      {
        id:1,
        label :" Septembre 2022 : Responsable formation Javascript MISA"
      }
    ],
    icon : <Work/>
  },
]
export const TimeLine = () => {
  return (
    <Timeline position="alternate">
      {timeLines.map((e) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              experience
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                {e.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ p: "12px", px: 2,my:3}}>
              <Typography variant="h5" component="span" color="#9d0b28"  >
                {e.title}
              </Typography>
             {
              e.description.map((d,j)=>{
                return <Typography key={j}>{d.label}</Typography>
              })
             }
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
