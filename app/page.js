import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className='flex justify-center'>
        {/* <div className=''><ImageSlideshow /></div> */}
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h1>Welcome to Your Cookbook</h1>
            <p className='flex justify-center'>
              Taste & share food from all over the world.
            </p>
          </div>
          <div className='flex flex-row justify-between mx-12'>
            <Link href='/community'>Explore Recipes</Link>
            <Link href='/meals'>Share a Recipe</Link>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>How it works</h2>
          <p className='max-w-4xl'>
            Cookbook is a platform for home cooks to document and share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
