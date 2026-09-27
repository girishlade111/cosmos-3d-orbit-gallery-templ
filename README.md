# Cosmos — 3D Orbit Gallery

An immersive **3D orbit gallery** experience: a slowly rotating sphere of ~1,500 particles with 24 gallery images mapped onto it, rendered in real time with Three.js. A poetic Carl Sagan quote overlays the scene while you orbit, zoom, and pan around the sphere. Originally generated with [v0.app](https://v0.app).

## Features

- **3D particle sphere** — 1,500 animated particles forming a rotating sphere (`components/particle-sphere.tsx`)
- **Image orbit gallery** — 24 WebP gallery images (`public/img-1.webp` … `img-24.webp`) textured onto orbiting planes around the sphere
- **Full camera control** — orbit, zoom, and pan via `@react-three/drei` `OrbitControls`
- **Ambient + point lighting** for depth
- **Cinematic overlay** — "The cosmos is within us..." quote in Instrument Serif
- **Dark/light theme** support via `theme-provider`
- Fully client-side — no backend, no API keys

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **3D:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling:** Tailwind CSS
- **Fonts:** Geist Sans/Mono
- **Icons:** lucide-react

## Quick start

```bash
git clone https://github.com/girishlade111/cosmos-3d-orbit-gallery-templ.git
cd cosmos-3d-orbit-gallery-templ
npm install        # or: pnpm install
npm run dev
```

Open http://localhost:3000 — drag to orbit, scroll to zoom.

### Tune the scene

All the fun knobs live at the top of `components/particle-sphere.tsx`:

| Constant | Effect |
|---|---|
| `PARTICLE_COUNT` | Number of sphere particles (default 1500) |
| `SPHERE_RADIUS` | Sphere size (default 9) |
| `ROTATION_SPEED_Y` | Rotation speed |
| `IMAGE_COUNT` / `IMAGE_SIZE` | How many gallery images orbit and how large they are |

## Project structure

```
cosmos-3d-orbit-gallery-templ/
├── app/
│   ├── page.tsx            # Fullscreen Canvas + overlay quote ("use client")
│   ├── layout.tsx          # Root layout + theme provider
│   └── globals.css         # Global styles
├── components/
│   ├── particle-sphere.tsx # Particle sphere + orbiting image textures
│   └── theme-provider.tsx  # Dark/light theme
├── lib/utils.ts            # cn() helper
├── public/img-*.webp       # Gallery images (25)
├── next.config.mjs         # Next.js config (static export enabled)
└── tailwind.config.ts      # Tailwind theme config
```

## Environment variables

None — the app is fully client-side and needs no API keys.

## Deployment notes

- Statically exported (`output: "export"` in `next.config.mjs`) with `basePath: "/cosmos-3d-orbit-gallery-templ"`; gallery texture paths are relative so they resolve under the GitHub Pages subpath
- Live at https://girishlade111.github.io/cosmos-3d-orbit-gallery-templ/
- Images are unoptimized for static hosting compatibility
- Also deployable to Vercel/Netlify as a regular Next.js app (remove `output: "export"` if a backend is added later)

## Roadmap ideas

- Click an orbiting image to open a lightbox
- Multiple sphere themes / particle color palettes
- Auto-rotate toggle and speed slider in the UI

---

Built by **Girish Lade** · https://ladestack.in
