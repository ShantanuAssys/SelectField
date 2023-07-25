
 

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from './Select';

export default function App() {
    {/*Basic Accordian*/}
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    }}>
       <div>
        <Accordion>  
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
             <div style={{margintop:'10px', marginBottom:'10px'}}>
             <Typography variant='h5'>$555000</Typography>
             </div>
            <Select />
            </AccordionDetails>
        </Accordion>
       </div>
    </div>
  );
}
