import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';


const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    // Add other fields as necessary
  });

  const [loading, setLoading] = useState(true);  // Loading state for data fetching
  const [error, setError] = useState(null);  // Error state to handle API errors
  const [deleting, setDeleting] = useState(false); // State for delete confirmation

  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get('http://localhost:3001/user/profile')
      .then(response => {
        setUser(response.data);
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch(error => {
        setError('Error fetching user data');
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    setLoading(true);
    axios.put('http://localhost:3001/user/profile', user)
      .then(response => {
        alert('Profile updated successfully');
        setLoading(false);
      })
      .catch(error => {
        alert('Error updating profile');
        setLoading(false);
      });
  };

  const handleDeleteConfirmation = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      setDeleting(true);
      axios.delete('http://localhost:3001/user/profile')
        .then(response => {
          alert('Profile deleted successfully');
          setDeleting(false);
          // Optionally, redirect the user or clear their session
        })
        .catch(error => {
          alert('Error deleting profile');
          setDeleting(false);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading state
  }

  if (error) {
    return <div>{error}</div>;  // Display error if there was an issue fetching data
  }

  return (
    <div>
      <h2>Profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Add other fields as necessary */}
        <button type="button" onClick={handleUpdate} disabled={loading}>Update Profile</button>
        <button type="button" onClick={handleDeleteConfirmation} disabled={deleting}>Delete Profile</button>
      </form>
    </div>
  );
};

export default Profile;
