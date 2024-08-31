import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Stack, Alert } from '@mui/material';
import { toast } from 'react-toastify';


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [pdfPreview, setPdfPreview] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long.";
    }
    if (!formData.resume) tempErrors.resume = "Resume is required.";
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const file = e.target.files ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: file,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    if (e.target.name === 'resume' && file) {
      generatePdfPreview(file);
    }
  };

  const generatePdfPreview = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const typedArray = new Uint8Array(reader.result);
      pdfjsLib.getDocument(typedArray).promise.then((pdf) => {
        pdf.getPage(1).then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          page.render({ canvasContext: context, viewport: viewport }).promise.then(() => {
            const thumbnailUrl = canvas.toDataURL();
            setPdfPreview(thumbnailUrl);
          });
        });
      });
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const { firstName, lastName, email, password, resume } = formData;
      const form = new FormData();
      form.append('firstName', firstName);
      form.append('lastName', lastName);
      form.append('email', email);
      form.append('password', password);
      form.append('resume', resume);

      try {
        const existingUser = await axios.get(`https://your-hr-6p7e.onrender.com/api/users/check/${email}`);
        if (existingUser.data.exists) {
          toast.info('You have already submitted your information.');
        } else {
          await axios.post('https://your-hr-6p7e.onrender.com/api/users/register', form);
          toast.success('Registration successful!');
          navigate('/thank-you');
        }
      } catch (error) {
        toast.error('Something went wrong. Please try again.');
      }
    } else {
      toast.error('Please fix the errors above.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
                fullWidth
                required
              />
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                fullWidth
                required
              />
            </Box>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              fullWidth
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              fullWidth
              required
            />
            <Button
              variant="outlined"
              component="label"
              fullWidth
            >
              Upload Resume
              <input
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={handleChange}
                hidden
                required
              />
            </Button>
            {errors.resume && <Typography color="error">{errors.resume}</Typography>}
            {pdfPreview && (
              <Box mt={2}>
                <Typography variant="subtitle1">Resume Preview:</Typography>
                <img
                  src={pdfPreview}
                  alt="PDF Thumbnail"
                  style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
                />
              </Box>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
