import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { lawyers as mockLawyers } from '../../data/mockData'; // Adjust path as needed

const BookingPage = () => {
    const { id } = useParams();
    const [lawyer, setLawyer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    useEffect(() => {
        const fetchLawyer = async () => {
            setLoading(true);
            try {
                // Simulated API call (replace with real API later)
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const selectedLawyer = mockLawyers.find((l) => String(l.id) === String(id));
                if (!selectedLawyer) throw new Error('Lawyer not found');
                setLawyer(selectedLawyer);
            } catch (error) {
                console.error('Failed to fetch lawyer:', error);
                setLawyer(null);
            } finally {
                setLoading(false);
            }
        };
        fetchLawyer();
    }, [id]);

    // Helper to parse availability into time slots (e.g., "9 AM - 5 PM" -> array of hours)
    const parseAvailability = (availabilityStr) => {
        if (!availabilityStr || availabilityStr === 'Unavailable') return [];
        const [start, end] = availabilityStr.split(' - ');
        const startHour = parseInt(start.split(' ')[0]);
        const endHour = parseInt(end.split(' ')[0]) + (end.includes('PM') ? 12 : 0);
        const slots = [];
        for (let i = startHour; i < endHour; i++) {
            slots.push(`${i % 12 === 0 ? 12 : i % 12} ${i >= 12 ? 'PM' : 'AM'}`);
        }
        return slots;
    };

    const handleSlotClick = (day, slot) => {
        setSelectedSlot({ day, time: slot });
        setBookingConfirmed(false); // Reset confirmation if new slot is selected
    };

    const handleConfirmBooking = () => {
        // Here you’d typically send the booking to an API
        console.log(`Booking confirmed: ${selectedSlot.day} at ${selectedSlot.time}`);
        setBookingConfirmed(true);
    };

    if (loading) {
        return (
            <div className="text-center text-gray-600 py-10">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                <span className="ml-2">Loading booking details...</span>
            </div>
        );
    }

    if (!lawyer) {
        return <div className="text-center text-red-600 py-10">Lawyer not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Book a Consultation with {lawyer.name}
            </h1>

            {/* Lawyer Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src={lawyer.imageUrl || 'https://via.placeholder.com/96'}
                        alt={lawyer.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{lawyer.name}</h2>
                        <p className="text-gray-600">{lawyer.specialization}</p>
                        <p className="text-gray-500 text-sm">Fee: {lawyer.consultationPay}৳ per session</p>
                    </div>
                </div>
                <Link
                    to={`/messages/${id}`}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    Chat with Lawyer
                </Link>
            </div>

            {/* Availability Schedule */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <CalendarIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Weekly Availability
                </h2>
                {lawyer.availability && Object.keys(lawyer.availability).length > 0 ? (
                    <div className="space-y-6">
                        {Object.entries(lawyer.availability).map(([day, hours]) => {
                            const slots = parseAvailability(hours);
                            return (
                                <div key={day} className="border-b pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 capitalize mb-2">{day}</h3>
                                    {slots.length > 0 ? (
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                                            {slots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => handleSlotClick(day, slot)}
                                                    className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${selectedSlot?.day === day && selectedSlot?.time === slot
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                                        }`}
                                                    disabled={bookingConfirmed}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">Unavailable</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="text-gray-600">No availability specified.</p>
                )}

                {/* Booking Confirmation */}
                {selectedSlot && !bookingConfirmed && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
                        <p className="text-gray-900">
                            Selected: <span className="font-semibold">{selectedSlot.day}</span> at{' '}
                            <span className="font-semibold">{selectedSlot.time}</span>
                        </p>
                        <button
                            onClick={handleConfirmBooking}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
                        >
                            Confirm Booking
                        </button>
                    </div>
                )}

                {bookingConfirmed && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg text-green-700">
                        <p>
                            Booking confirmed for{' '}
                            <span className="font-semibold">{selectedSlot.day}</span> at{' '}
                            <span className="font-semibold">{selectedSlot.time}</span> with {lawyer.name}!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingPage;