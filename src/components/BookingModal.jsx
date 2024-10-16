import { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({ isOpen, onClose, onSubmit, time, court, locationId, sportId, date }) => {
    const [username, setUsername] = useState("");
    const [PIN, setPIN] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:4040/api/users/validate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, PIN }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed: ${errorData.message}`);
            }

            const { userId } = await response.json();

            
            await onSubmit({
                location: locationId,
                sport: sportId,
                court,
                time,
                user: userId,
                date: date,
            });
            setUsername("");
            setPIN("");
            onClose();
        } catch (error) {
            setError(error.message); 
            toast.error(`Booking failed: ${error.message}`, { position: "top-right" }); 
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded shadow-md z-60">
                    <h2 className="text-lg font-bold mb-4">Create Booking</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">PIN</label>
                            <input
                                type="password"
                                value={PIN}
                                onChange={(e) => setPIN(e.target.value)}
                                className="border rounded w-full py-2 px-3"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
                                Cancel
                            </button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Book
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    );
};

export default BookingModal;
