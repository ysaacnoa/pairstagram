import * as stylex from '@stylexjs/stylex';
import { Navbar } from '@/modules/home/components/navbar';
import { ProfileHeader } from '@/modules/home/components/profile-header';
import { FeedGrid } from '@/modules/home/components/feed';
import { MOCK_POSTS } from '@/mock/mock-data';
import { appStyles } from './app.styles';
import type { PostItem } from '@/modules/home/models/feed.types';


function App() {
  const handleSearchChange = (_query: string) => {
    // Lógica futura para filtrar el feed
  };

  const handleNavAction = (_actionId: string) => {
    // Lógica para crear post, abrir notificaciones o mensajes
  };

  const handlePostClick = (_post: PostItem) => {
    // Lógica futura para abrir el modal del post
  };

  const handleStoryClick = (_storyId: string) => {
    // Lógica futura para abrir el visor de historias
  };

  return (
    <main {...stylex.props(appStyles.main)}>
      <Navbar
        onSearchChange={handleSearchChange}
        onActionClick={handleNavAction}
      />
      <ProfileHeader
        onStoryClick={handleStoryClick}
      />
      <FeedGrid
        posts={MOCK_POSTS}
        onPostClick={handlePostClick}
      />
    </main>
  );
}

export default App;