import React, { useState,useEffect } from 'react';

const Profile = () => {
  // Add state and functions to manage user profile details here
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    age: '',
    gender: '',
    dob: '',
    mobile: '',
  });
  useEffect(() => {
    // Fetch user profile data from the server when the component mounts
    fetchUserProfile();
  }, []);
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/api/profile'); // Adjust the API route accordingly
     const user = response.data;
      setUserData(user);
      setProfileData({
        age: user.age || '',
        gender: user.gender || '',
        dob: user.dob || '',
        mobile: user.mobile || '',
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      // Send updated profile data to the server
       await axios.put('/api/profile', profileData); // Adjust the API route accordingly
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {/* Display and update user profile details here */}
      {/* <div>
        <strong>Name:</strong> {userData.name}
      </div>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
       */}
      <div>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={profileData.age}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={profileData.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="dob"
            placeholder="Date of Birth"
            value={profileData.dob}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            value={profileData.mobile}
            onChange={handleInputChange}
          />
        </div>
        
        {!editMode ? (
        <button onClick={handleEditClick}>Edit Profile</button>
      ) : (
        <button onClick={handleSaveClick}>Save Profile</button>
      )}
      </div>
  );
};

export default Profile;
