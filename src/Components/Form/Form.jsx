import { useState } from "react";
import { TextField, Input } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#83153A",
        contrastText: "#83153A",
      },
    },
  });

  const styles = {
    display: "block",
    marginTop: 50,
    marginBottom: 50,
  };

  return (
    <form className={style.form}>
      <div className={style.div}>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            label="Full Name"
            color="neutral"
            fullWidth
            style={styles}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </TextField>
          <TextField
            variant="outlined"
            label="Phone Number"
            color="neutral"
            fullWidth
            style={styles}
          >
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </TextField>
          <TextField
            variant="outlined"
            label="Official Mail ID"
            color="neutral"
            fullWidth
            style={styles}
          >
            <Input value={mail} onChange={(e) => setMail(e.target.value)} />
          </TextField>
        </ThemeProvider>
      </div>
      <div className={style.btn}>
        <button>Get OTP</button>
      </div>
    </form>
  );
};

export default Form;
