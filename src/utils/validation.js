import * as yup from 'yup';

// User registration schema
export const registerSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  role: yup.string().oneOf(['client', 'lawyer']).required('Role is required'),
});

// Lawyer profile schema
export const lawyerProfileSchema = yup.object().shape({
  specialization: yup.string().required('Specialization is required'),
  experience: yup
    .number()
    .positive('Experience must be a positive number')
    .required('Experience is required'),
  education: yup.array().of(
    yup.object().shape({
      degree: yup.string().required('Degree is required'),
      institution: yup.string().required('Institution is required'),
      year: yup.number().required('Year is required'),
    })
  ),
  hourlyRate: yup
    .number()
    .positive('Hourly rate must be a positive number')
    .required('Hourly rate is required'),
  languages: yup.array().of(yup.string()).min(1, 'At least one language is required'),
  about: yup
    .string()
    .min(100, 'About section must be at least 100 characters')
    .required('About section is required'),
});

// Booking schema
export const bookingSchema = yup.object().shape({
  date: yup.date().min(new Date(), 'Date cannot be in the past').required('Date is required'),
  time: yup.string().required('Time is required'),
  duration: yup
    .number()
    .oneOf([30, 60, 90, 120], 'Invalid duration')
    .required('Duration is required'),
  description: yup
    .string()
    .min(20, 'Please provide more details about your case')
    .required('Description is required'),
});

// Message schema
export const messageSchema = yup.object().shape({
  content: yup.string().required('Message cannot be empty'),
  attachments: yup.array().of(
    yup.object().shape({
      file: yup.mixed().required('File is required'),
      type: yup.string().oneOf(['document', 'image']).required('File type is required'),
    })
  ),
});

// Review schema
export const reviewSchema = yup.object().shape({
  rating: yup
    .number()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating cannot be more than 5')
    .required('Rating is required'),
  comment: yup
    .string()
    .min(10, 'Review must be at least 10 characters')
    .required('Review comment is required'),
});

// Support ticket schema
export const supportTicketSchema = yup.object().shape({
  subject: yup.string().required('Subject is required'),
  category: yup
    .string()
    .oneOf(['technical', 'billing', 'legal', 'other'])
    .required('Category is required'),
  description: yup
    .string()
    .min(20, 'Please provide more details about your issue')
    .required('Description is required'),
  priority: yup
    .string()
    .oneOf(['low', 'medium', 'high'])
    .required('Priority is required'),
});

// Search filters schema
export const searchFiltersSchema = yup.object().shape({
  specialization: yup.string(),
  experience: yup.string(),
  priceRange: yup.string(),
  rating: yup.number().min(0).max(5),
  location: yup.string(),
  languages: yup.array().of(yup.string()),
});

export const validateForm = async (schema, data) => {
  try {
    await schema.validate(data, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (err) {
    const errors = err.inner.reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
    return { isValid: false, errors };
  }
};

export default {
  registerSchema,
  lawyerProfileSchema,
  bookingSchema,
  messageSchema,
  reviewSchema,
  supportTicketSchema,
  searchFiltersSchema,
  validateForm,
};
