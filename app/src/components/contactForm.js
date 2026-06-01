import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

const INFO_ITEMS = [
  {
    icon: <PhoneIcon sx={{ color: "#58a6ff", fontSize: 20 }} />,
    label: "Phone",
    value: "+1 (780) 554-8861",
    href: "tel:+17805548861",
  },
  {
    icon: <EmailIcon sx={{ color: "#58a6ff", fontSize: 20 }} />,
    label: "Email",
    value: "caelan.ross@gmail.com",
    href: "mailto:caelan.ross@gmail.com",
  },
  {
    icon: <GitHubIcon sx={{ color: "#58a6ff", fontSize: 20 }} />,
    label: "GitHub",
    value: "github.com/Caelan-Ross",
    href: "https://github.com/Caelan-Ross",
  },
];

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#0d1117",
    "& fieldset": { borderColor: "#30363d" },
    "&:hover fieldset": { borderColor: "#58a6ff60" },
    "&.Mui-focused fieldset": { borderColor: "#58a6ff" },
  },
  "& .MuiInputLabel-root": { color: "#8b949e" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#58a6ff" },
  "& .MuiOutlinedInput-input": { color: "#e6edf3" },
  "& .MuiFormHelperText-root": { color: "#f47067" },
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });

  const showAlert = (message, severity) => {
    setAlert({ open: true, message, severity });
    setTimeout(() => setAlert((a) => ({ ...a, open: false })), 5000);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await emailjs.send(
        "service_am3pm6d",
        "template_zt0o7i3",
        { name: data.name, email: data.email, subject: data.subject, message: data.message },
        "DwHZcS0TXC7xPA8xH"
      );
      showAlert("Message sent successfully!", "success");
      reset();
    } catch {
      showAlert("Something went wrong. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
        gap: 3,
        alignItems: "start",
      }}
    >
      {/* Form card */}
      <Box
        sx={{
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 2,
          p: { xs: 3, sm: 4 },
        }}
      >
        <Collapse in={alert.open} sx={{ mb: alert.open ? 2 : 0 }}>
          <Alert severity={alert.severity} variant="filled" sx={{ borderRadius: 1.5 }}>
            {alert.message}
          </Alert>
        </Collapse>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
        >
          <TextField
            label="Name"
            fullWidth
            size="small"
            sx={fieldSx}
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register("name", {
              required: "Please enter your name",
              maxLength: { value: 30, message: "30 characters max" },
            })}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            size="small"
            sx={fieldSx}
            error={!!errors.email}
            helperText={errors.email && "Please enter a valid email address"}
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          <TextField
            label="Subject"
            fullWidth
            size="small"
            sx={fieldSx}
            error={!!errors.subject}
            helperText={errors.subject?.message}
            {...register("subject", {
              required: "Please enter a subject",
              maxLength: { value: 75, message: "75 characters max" },
            })}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={6}
            sx={fieldSx}
            error={!!errors.message}
            helperText={errors.message && "Please enter a message"}
            {...register("message", { required: true })}
          />

          <Button
            type="submit"
            variant="outlined"
            disabled={submitting}
            endIcon={<SendIcon fontSize="small" />}
            sx={{ alignSelf: "flex-start", textTransform: "none" }}
          >
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>

      {/* Info panel */}
      <Box
        sx={{
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 2,
          p: { xs: 3, sm: 4 },
          minWidth: { md: 260 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 0.5, fontFamily: '"Space Mono", monospace', fontSize: "0.95rem" }}
        >
          Get in touch
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: "0.82rem" }}>
          Open to opportunities and conversations.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          {INFO_ITEMS.map(({ icon, label, value, href }) => (
            <Box key={label}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.25 }}>
                {icon}
                <Typography variant="body2" sx={{ color: "#8b949e", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {label}
                </Typography>
              </Box>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                underline="hover"
                sx={{ color: "#e6edf3", fontSize: "0.875rem", "&:hover": { color: "#58a6ff" } }}
              >
                {value}
              </Link>
              {label !== INFO_ITEMS[INFO_ITEMS.length - 1].label && (
                <Divider sx={{ borderColor: "#30363d", mt: 2.5 }} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
