import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
    res.json({
        recipes: [
            {
                EdamamId: 1,
                title: "Pasta",
                authors: "Italian"
            },
            {
                EdamamId: 2,
                title: "Hamburger",
                authors: "Fast food"
            }

        ]
    })

});

export default router;