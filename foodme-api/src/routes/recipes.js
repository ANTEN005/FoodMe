import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
    res.json({
        recipes: [
            {
                id: 1,
                name: "Pasta",
                authors: "Italian"
            },
            {
                id: 2,
                name: "Hamburger",
                authors: "Fast food"
            }

        ]
    })

});

export default router;