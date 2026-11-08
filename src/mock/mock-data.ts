// src/mockData.ts
export interface Story {
  id: string;
  title: string;
  coverUrl: string;
}

export interface Post {
  id: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
  caption: string;
  location: string;
  date: string;
}

export const USER_PROFILE = {
  username: 'Nuestra Historia',
  name: 'Tú & Yo 💖',
  bio: 'Coleccionando momentos e historias juntos ✨\nDesde el día #1 | Nuestro lugar favorito 📍',
  avatarUrl: 'https://pub-ca80f20b7e1043ffbe2af60cad47810f.r2.dev/greis/image-main.jpg',
  postsCount: 11,
  followersCount: '1M',
  followingCount: '1',
};

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80',
    likesCount: 1024,
    commentsCount: 42,
    caption: 'Un día inolvidable caminando juntos ✨',
    location: 'Nuestro lugar especial',
    date: '12 de Febrero',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    likesCount: 2048,
    commentsCount: 89,
    caption: 'Tardes de café y risas infinitas ☕❤️',
    location: 'Cafecito de siempre',
    date: '28 de Enero',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
    likesCount: 512,
    commentsCount: 15,
    caption: 'Atardeceres que se quedan para siempre 🌅',
    location: 'La Playa',
    date: '5 de Enero',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    likesCount: 4096,
    commentsCount: 120,
    caption: 'Celebrando otro mes más a tu lado 🥳',
    location: 'En Casa',
    date: '20 de Diciembre',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
    likesCount: 812,
    commentsCount: 30,
    caption: 'Escapada de fin de semana 🌲',
    location: 'Montaña',
    date: '15 de Noviembre',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    likesCount: 950,
    commentsCount: 45,
    caption: 'Simplemente nosotros ❤️',
    location: 'Ciudad',
    date: '1 de Octubre',
  },
];