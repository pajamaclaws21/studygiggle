function snapUpload() {
    let file = document.getElementById("file").files[0];

    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const data = reader.result;
      console.log(data);
    });
    
    file = reader.readAsText(file);
    alert("File Read");
    console.log(file);
}