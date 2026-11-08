import type { StoryGroup } from "@/modules/histories/models/story.types";

export const MOCK_STORY_DETAILS: Record<string, StoryGroup> = {
  '1': {
    id: '1',
    title: 'Viajes ✈️',
    coverUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&auto=format&fit=crop&q=80',
    items: [
      {
        id: '1-1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
        duration: 5000,
        caption: 'Playa, sol y tranquilidad 🌊',
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Música opcional
      },
      {
        id: '1-2',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80',
        duration: 5000,
        caption: 'Ruta por la montaña 🏔️',
      },
      {
        id: '1-3',
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        duration: 8000,
      },
    ],
  },
  '2': {
    id: '2',
    title: 'Citas ☕',
    coverUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&auto=format&fit=crop&q=80',
    items: [
      {
        id: '2-1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
        duration: 5000,
        caption: 'Nuestro café favorito ☕❤️',
      },
      {
        id: '2-2',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80',
        duration: 5000,
      },
    ],
  },
  '3': {
    id: '3',
    title: 'Risas 😂',
    coverUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=150&auto=format&fit=crop&q=80',
    items: [
      {
        id: '3-1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=80',
        duration: 4000,
        caption: 'Momentos inolvidables ✨',
      },
    ],
  },
  '4': {
    id: '4',
    title: 'Conciertos 🎶',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&auto=format&fit=crop&q=80',
    items: [
      {
        id: '4-1',
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        duration: 10000,
      },
    ],
  },
};