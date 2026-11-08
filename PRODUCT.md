# pairstagram

## Product
`pairstagram` is a UI/demo product for a romantic pair-viewing experience. It is not a production social network; it is a visual interface for browsing a date's posts and stories.

## Primary Use
The primary use is a romantic landing view for “mi date,” showing visual details of stories and posts in a warm, intimate, date-oriented experience.

## User Jobs
- Browse a selected date profile in a romantic, personal UI.
- View stories in a portrait/vertical modal that feels like a focused viewing experience.
- Watch video stories with clear progress, controls, captions, and transitions.
- Navigate between stories without losing the immersive portrait viewing state.

## Product Constraints
- Preserve the existing web layout.
- Preserve the existing mock story data.
- Preserve the existing Spanish copy.
- Preserve existing accessibility needs where practical.
- Preserve the existing app identity unless a specific surface is being redesigned.

## Story Viewer Requirements
- The story viewer must be portrait/vertical across screens.
- Do not use pure black backgrounds.
- Use a blue translucent background for the story viewer surface.
- Separate video playback logic from story presentation logic.
- Create a reusable base video component.
- Keep the story wrapper responsible for:
  - progress
  - overlays
  - navigation buttons
  - captions
  - transitions
  - story state

## Content and Data
- The app uses existing mock data for profile, posts, and stories.
- Story data includes:
  - image items
  - video items
  - optional audio
  - optional captions
  - story durations
  - Spanish titles and captions

## Visual Direction
- The existing app uses a light, romantic, pink-oriented visual language.
- The story viewer is a local surface with an explicit blue translucent direction.
- The viewer should remain part of the same product, not become a separate unrelated app.
- The final viewer should avoid a generic dark/black modal pattern and instead use a romantic, translucent, blue-tinted cinematic treatment.

## Non-Goals
- Do not replace the existing profile, feed, or navigation layout.
- Do not introduce a real backend.
- Do not change the app into a full production social product.
- Do not use pure black as the primary story viewer background.
- Do not rebuild the entire app for the story viewer.
