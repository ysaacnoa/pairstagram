import * as stylex from '@stylexjs/stylex';
import { Navbar } from './home/navbar';
import { ProfileHeader } from './home/profile-header';
import { FeedGrid } from './home/feed';
import { USER_PROFILE, MOCK_STORIES, MOCK_POSTS } from './mock/mock-data';
import { appStyles } from './app.styles';
import type { PostItem } from './home/feed/feed.types';


function App() {
  const handleSearchChange = (query: string) => {
    // Lógica futura para filtrar el feed
  };

  const handleNavAction = (actionId: string) => {
    // Lógica para crear post, abrir notificaciones o mensajes
  };

  const handlePostClick = (post: PostItem) => {
    // Lógica futura para abrir el modal del post
  };

  const handleStoryClick = (storyId: string) => {
    // Lógica futura para abrir el visor de historias
  };

  return (
    <main {...stylex.props(appStyles.main)}>
      <Navbar
        onSearchChange={handleSearchChange}
        onActionClick={handleNavAction}
      />
      <ProfileHeader
        profile={USER_PROFILE}
        stories={MOCK_STORIES}
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