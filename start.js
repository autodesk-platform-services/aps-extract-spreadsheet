/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by APS Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

const path = require('path');
const express = require('express');

if (process.env.APS_CLIENT_ID == null || process.env.APS_CLIENT_SECRET == null || process.env.APS_BUCKET == null) {
    console.error('Some of the required environment variables are missing.');
    process.exit(1);
}

let app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);
app.use(require('./routes/api.js'));
let server = app.listen(app.get('port'), function () {
    console.log('Starting at ' + (new Date()).toString());
    console.log('Server listening on port ' + server.address().port);
});
