// const express = require('express');
// const app = express();
// const port = 3000;


// app.use(express.json());

// const submitReview = (req, res) => {
//     const { title, review } = req.body;
    
//     if (!title || !review) {
//         return res.status(400).json({ error: 'Book title and review content are required.' });
//     }


//     const newReview = { id: Date.now(), title, review };

    
//     res.status(201).json({ message: 'Review submitted successfully.', review: newReview });
// };


// app.post('/submit-review', submitReview)

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
