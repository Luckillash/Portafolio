import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab";
import Card from "./Card";

import Blob1 from "./Blob1";
import Blob2 from "./Blob2";
import Blob3 from "./Blob3";
import { useMediaQuery, useTheme } from "@mui/material";
import Card2 from "./Card2";
import Card3 from "./Card3";

export default function Proyectos () {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('sm'))


    return (

        <section className=' bg-color2 flex items-center justify-center flex-col'>

            <h1 className='text-3xl font-bold text-[#CFB3E6]'>Proyectitos</h1>
            
            <div className='w-full max-w-[1080px]'>

                <Timeline 

                position={"alternate-reverse"}>

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">
                        
                            { matches && <Blob1 /> }

                        </TimelineOppositeContent>

                        <TimelineSeparator>

                        <TimelineDot />

                        <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>
                            
                            <Card />
                            
                        </TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">
                            
                            { matches && <Blob2 /> }

                        </TimelineOppositeContent>

                        <TimelineSeparator>

                        <TimelineDot />

                        <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent>

                            <Card2 />

                        </TimelineContent>

                    </TimelineItem>

                    <TimelineItem>

                        <TimelineOppositeContent color="text.secondary">
                            
                            { matches && <Blob3 /> }

                        </TimelineOppositeContent>

                        <TimelineSeparator>

                        <TimelineDot />

                        </TimelineSeparator>

                        <TimelineContent>

                            <Card3 />

                        </TimelineContent>

                    </TimelineItem>

                </Timeline>

            </div>

        </section>

    )
    
}