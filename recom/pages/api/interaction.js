import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userId, movieId, interactionType } = req.body;

        // Validate input fields
        if (!userId || !movieId || !interactionType) {
            return res.status(400).json({ error: 'User ID, Movie ID, and Interaction Type are required.' });
        }

        // Ensure the interaction type is either 'like' or 'dislike'
        if (interactionType !== 'like' && interactionType !== 'dislike') {
            return res.status(400).json({ error: 'Invalid interaction type. Must be "like" or "dislike".' });
        }

        try {
            // Check if the user has already interacted with this movie
            const existingInteraction = await prisma.user_interactions.findFirst({
                where: {
                    userId: userId,
                    movieId: movieId,
                },
            });

            if (existingInteraction) {
                // If an interaction already exists, update it
                await prisma.user_interactions.update({
                    where: { interactionId: existingInteraction.interactionId },
                    data: { interactionType: interactionType },
                });
            } else {
                // If no existing interaction, create a new one
                await prisma.user_interactions.create({
                    data: {
                        userId,
                        movieId,
                        interactionType,
                    },
                });
            }

            // Return a successful status without any message
            return res.status(200).end();
        } catch (error) {
            console.error('Error saving interaction:', error);
            return res.status(500).json({ error: 'Internal server error.' });
        }
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
