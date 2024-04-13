const https = require('https');

const firebaseConfig = {
    projectId: "existinguisher",
};

const fetchDocuments = () => {
  const url = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/existinguisher`;

  https.get(url, response => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      if (response.statusCode === 200) {
        const jsonData = JSON.parse(data);
        jsonData.documents.forEach(document => {
          const docId = document.name.split('/').pop();
          const docData = document.fields;
          console.log(`${docId} => ${JSON.stringify(docData, null, 2)}`);
        });
      } else {
        console.error(`Failed to fetch documents. Status code: ${response.statusCode}`);
      }
    });
  }).on('error', error => {
    console.error('Error:', error);
  });
};

fetchDocuments();