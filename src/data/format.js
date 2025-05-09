import fs from 'fs';

// Read the JSON file
fs.readFile('IndianGovernmentSchemes2025.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let schemes;
    try {
        schemes = JSON.parse(data);
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        return;
    }

    // Check if it's an array or single object
    if (!Array.isArray(schemes)) {
        schemes = [schemes];
    }

    // Process each scheme
    schemes.forEach(scheme => {
        if (scheme.benefits && typeof scheme.benefits === 'string') {
            scheme.benefits = scheme.benefits
                .split(',')
                .map(b => b.trim())
                .filter(b => b.length > 0);
        }
    });

    // Write back to the file
    fs.writeFile('indiangovernmentschemes2025.json', JSON.stringify(schemes, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
            console.error('Error writing file:', writeErr);
        } else {
            console.log('✅ Benefits fields converted to string arrays successfully!');
        }
    });
});
