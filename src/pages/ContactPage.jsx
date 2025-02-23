import { useState } from 'react';
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
    PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const contactInfo = {
        email: 'ukilchambers@gmail.com',
        facebook: 'https://www.facebook.com/profile.php?id=61573513772371',
        address: 'Bangladesh, Rajshahi, Bangladesh, 6204', // Placeholder; update with your actual address
        phone: '+880 1609-812584', // Placeholder; update with your actual phone number
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Simulate API call (replace with actual backend endpoint)
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmissionStatus('error');
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        We’d love to hear from you. Reach out for any inquiries or support.
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    {/* Contact Info */}
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                                    <p className="text-gray-600">{contactInfo.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-blue-600 hover:underline transition duration-150"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                                    <p className="text-gray-600">{contactInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FacebookIcon className="h-6 w-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                                    <a
                                        href={contactInfo.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline transition duration-150"
                                    >
                                        Facebook Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Your full name"
                                />
                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Reason for contact"
                                />
                                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Your message here..."
                                />
                                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <PaperAirplaneIcon className="h-5 w-5 ml-2 inline" />
                            </button>

                            {submissionStatus === 'success' && (
                                <p className="text-green-600 text-center mt-4">
                                    Thank you! Your message has been sent successfully.
                                </p>
                            )}
                            {submissionStatus === 'error' && (
                                <p className="text-red-600 text-center mt-4">
                                    Oops! Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map (Placeholder) */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
                    <div className="h-64 rounded-lg overflow-hidden">
                        {/* Replace with an actual map (e.g., Google Maps, Leaflet) */}
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                            Map Placeholder (Integrate Google Maps or similar here)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Custom Icon Component (since FacebookIcon isn't in Heroicons)
const FacebookIcon = (props) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.53 4.5 10.02 10 10.02s10-4.49 10-10.02c0-5.53-4.5-10.02-10-10.02zm4.14 7.71h-2.14c-.14 0-.28.02-.42.06v-2.2c.14-.02.28-.04.42-.04h1.72c.42 0 .76.34.76.76v2.42zm-2.14 6.46h-2.28V12.3h2.28v3.91zm-1.14-5.37h-.43c-.42 0-.76-.34-.76-.76s.34-.76.76-.76h.43c.42 0 .76.34.76.76s-.34.76-.76.76z" />
    </svg>
);

export default ContactPage;