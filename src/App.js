import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select from "./Select";
import useValues from "./hook/useValues";
import Context from "./context/Context";

export default function App() {
  // Basic Accordian
  const [validExpression, setValidExpression] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  const { options, value, formatter } = React.useContext(Context)

  const calculate = () =>{
    try {
        const expression = value.reduce((prev, current) => {
          let output = "" + prev;
          if (current.type === "Variable") {
            output = output + current.def.value;
          } else {
            output = output + current.def;
          }
          return output;
        }, "");
        // eslint-disable-next-line no-eval
        const newAmount = eval(expression);
        setAmount(newAmount);
        setValidExpression(true);
      } catch {
        setValidExpression(false);
        setAmount(0);
      }
  }

  React.useEffect(() => {
    calculate()
  }, [options, value]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <div style={{ backgroundColor: "white ", padding: 24, borderRadius: 12 }}>
        {/* DISABLED ACCORDION */}
        {/* <Accordion>  
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails> */}
        <div style={{ margintop: "10px", marginBottom: "10px" }}>
          {!validExpression && (
            <Typography color={"red"} variant="h5">
              ERROR!!
            </Typography>
          )}
          {validExpression && <Typography variant="h5">{formatter.format(amount)}</Typography>}
        </div>
        <Select />
        {/* </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}