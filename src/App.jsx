import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    action: 'book'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Railway Reservation System</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Source Station</label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              placeholder="Enter source"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Destination Station</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              placeholder="Enter destination"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date of Journey</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Action</label>
            <select
              name="action"
              value={formData.action}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md p-2"
            >
              <option value="book">Book Ticket</option>
              <option value="cancel">Cancel Ticket</option>
              <option value="pay">Make Payment</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-green-100 p-4 rounded-xl">
            <p className="text-green-700 font-semibold">Your request has been submitted!</p>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Source:</strong> {formData.source}</li>
              <li><strong>Destination:</strong> {formData.destination}</li>
              <li><strong>Date:</strong> {formData.date}</li>
              <li><strong>Action:</strong> {formData.action}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
