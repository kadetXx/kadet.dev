# kadet.dev — v3

Next.js (App Router) + Prismic. Replaces the v2 Gatsby build, which lives on
the `v2-gatsby-js` branch.

## Running it

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

`.env.local` needs:

```
PRISMIC_REPO_NAME=
PRISMIC_ACCESS_TOKEN=
```

## Layout

- `src/app/page.tsx` — the homepage, built from the "workspace" Paper frames.
- `src/app/blog/` — post index and `[uid]` post pages, ported from v2.
- `src/lib/posts.ts` — Prismic queries and the shape the blog renders against.
- `src/components/PostBody.tsx` — highlights code blocks and adds copy buttons.
- `src/components/Navigation.tsx` — built from a hidden layer in the design,
  deliberately not rendered yet.

Posts are statically generated and revalidate hourly, so publishing in Prismic
doesn't need a redeploy. Prismic previews run through `/api/preview`.

## License

Copyright © 2020 - present Collins Enebeli. All rights reserved

**The code and media present in this repository remains an intellectual property of the individual metioned above and therefore CANNOT be copied, modified, redistributed, sublicenced or used as a template without due permission from the author.**
