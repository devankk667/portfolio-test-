import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', data);
      console.log('Booking created:', response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Booking error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Contact & Bookings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        {/* Form fields for name, email, service, date */}
      </form>
    </div>
  );
};

export default ContactPage;