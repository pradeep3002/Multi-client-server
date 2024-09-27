// src/components/BookingSystem.tsx

import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  MenuItem, 
  Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface BookingFormData {
  service: string;
  date: Date | null;
  time: Date | null;
  name: string;
  email: string;
  notes: string;
}

const services = [
  { value: 'haircut', label: 'Haircut' },
  { value: 'massage', label: 'Massage' },
  { value: 'nails', label: 'Nail Treatment' },
  { value: 'facial', label: 'Facial' },
];

const BookingSystem: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingFormData>({
    service: '',
    date: null,
    time: null,
    name: '',
    email: '',
    notes: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeChange = (time: Date | null) => {
    setBookingData({ ...bookingData, time });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Booking submitted:', bookingData);
    // Here you would typically send the data to your backend
    // and handle the response (success/error)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Book a Service
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Service"
                  name="service"
                  value={bookingData.service}
                  onChange={handleInputChange}
                  required
                >
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Date"
                  value={bookingData.date}
                  onChange={handleDateChange}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePicker
                  label="Time"
                  value={bookingData.time}
                  onChange={handleTimeChange}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  name="notes"
                  value={bookingData.notes}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
};

export default BookingSystem;