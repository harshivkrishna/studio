const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
  
    const res = await fetch('http://localhost:5000/api/images/upload', {
      method: 'POST',
      body: formData,
    });
  
    const data = await res.json();
    if (data.success) {
      alert('Image uploaded successfully');
    } else {
      alert('Error uploading image');
    }
  };
  