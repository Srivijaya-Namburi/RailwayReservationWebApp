import React, { useState } from "react";

const trainsData = [
  {
    id: 101,
    name: "Express 101",
    from: "Noida",
    to: "Bengaluru",
    departure: "10:00 AM",
    arrival: "2:00 PM",
    status: "Available",
  },
  {
    id: 102,
    name: "Express 102",
    from: "Kolkata",
    to: "Delhi",
    departure: "11:00 AM",
    arrival: "3:00 PM",
    status: "Waiting List",
  },
  {
    id: 103,
    name: "Express 103",
    from: "Mumbai",
    to: "Agra",
    departure: "9:00 AM",
    arrival: "1:00 PM",
    status: "Available",
  },
];

export default function RailwayReservationApp() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingStatus, setBookingStatus] = useState("");

  const handleSearch = () => {
    const filtered = trainsData.filter(
      (train) =>
        train.from.toLowerCase() === source.toLowerCase() &&
        train.to.toLowerCase() === destination.toLowerCase()
    );
    setResults(filtered);
  };

  const handleBooking = (train) => {
    setSelectedTrain(train);
    setShowPayment(true);
  };

  const handlePayment = () => {
    if (selectedTrain.status === "Available") {
      setBookingStatus(`✅ Booking Successful: ${selectedTrain.name} from ${selectedTrain.from} to ${selectedTrain.to}`);
    } else {
      setBookingStatus(`❌ Booking Failed: ${selectedTrain.name} - Status: ${selectedTrain.status}`);
    }
    setShowPayment(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Railway Reservation</h1>
      <div style={{ marginBottom: '20px' }}>
        <input placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} style={{ marginRight: '10px' }} />
        <input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} style={{ marginRight: '10px' }} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginRight: '10px' }} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {bookingStatus && <p style={{ color: 'green', fontWeight: 'bold' }}>{bookingStatus}</p>}

      <div>
        {results.map(train => (
          <div key={train.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h2>{train.name}</h2>
            <p>{train.from} to {train.to}</p>
            <p>Departure: {train.departure}, Arrival: {train.arrival}</p>
            <p>Status: {train.status}</p>
            <button onClick={() => handleBooking(train)}>Book Now</button>
          </div>
        ))}
      </div>

      {showPayment && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '5px', width: '300px' }}>
            <h2>Payment Gateway</h2>
            <p>Train: {selectedTrain.name}</p>
            <p>From: {selectedTrain.from} → To: {selectedTrain.to}</p>
            <input placeholder="Card Number" style={{ display: 'block', margin: '10px 0', width: '100%' }} />
            <input placeholder="Expiry Date" style={{ display: 'block', margin: '10px 0', width: '100%' }} />
            <input placeholder="CVV" style={{ display: 'block', margin: '10px 0', width: '100%' }} />
            <button onClick={handlePayment} style={{ width: '100%' }}>Pay & Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
}
