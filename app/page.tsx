import Image from 'next/image';
import barnettsGarageDoorsLogo from '../public/images/barnetts-garage-doors.png';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-offwhite">
      <h1 className="text-4xl font-bold text-primary">
        Welcome to My Website
      </h1>
    </main>
  );
}
