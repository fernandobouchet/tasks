# SimpleTaskBoard

A task management system with a table view and a Kanban board, developed with [Next.js](https://nextjs.org/), [Typescript](https://www.typescriptlang.org/), and styled using [Tailwind CSS](https://tailwindcss.com/). Its designed to organise and prioritise tasks efficiently.

## **Features**

- **Authentication System**: Secure login via Google OAuth using **NextAuth** and **Prisma** integration.
- **Internationalisation (i18n)**: Multi-language support powered by **next-intl**.
- **User Interaction**: Easily manage task and boards with CRUD operations.
- **Data Visualisation**: Dynamic charts built with **Recharts**.
- **Customisable Themes**: Light and dark mode support with **next-themes** and **tailwindcss**.
- **Responsive Design**: The web app is fully responsive, offering an optimised experience across desktop, tablet, and mobile devices. 

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/fernandobouchet/tasks/refs/heads/main/preview.webp)

## Demo
https://simpletaskboard.vercel.app

## Used libraries

- [Nextjs](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [NextAuth](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [sonner](https://sonner.dev/)
- [Recharts](https://recharts.org/)

## **Prerequisites**

- Node.js >= 18
- npm
- Compatible database (configured via Prisma)

## Getting started

- **Set up the environment**

  Create a .env file with the following variables:
  ```env
  DATABASE_URL=<your-database-url>
  GOOGLE_CLIENT_ID=<your-google-client-id>
  GOOGLE_CLIENT_SECRET=<your-google-client-secret>
  AUTH_SECRET=<your-auth-secret>

- **Clone the repository**:
  ```
  git clone https://github.com/fernandobouchet/tasks
  cd tasks
  npm install
  npx prisma migrate dev
  npm run dev
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the code. The page auto-updates as you edit the file.
