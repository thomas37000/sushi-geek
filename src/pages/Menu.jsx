import ramen from '../assets/menu/ramen.webp';
import ramenPika from '../assets/menu/ramen-poulet-pika.webp';
import sushi from '../assets/menu/sushi.webp';
import sushi2 from '../assets/menu/sushi2.webp';
import sushi4 from '../assets/menu/sushi4.webp';
import sushiYoda from '../assets/menu/sushi-yoda-red.webp';
import './Menu.css';

const Menu = () => {
  return (
    <div id='menu' className='container px-5 py-2 mx-auto lg:px-32 lg:pt-24'>
      <div className='flex justify-center pb-4 text-3xl font-bold'>
        <h2 style={{ fontFamily: 'Shojumaru' }}>Menu</h2>
      </div>

      {/* Plat colonnes de gauche */}
      <div className='flex flex-wrap -m-1 md:-m-2'>
        <div className='flex flex-wrap w-1/2'>
          <div className='w-1/2 p-1 md:p-2'>
            <div className='relative group'>
              <img
                alt='assiette de sushis'
                className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-40'
                src={ramen}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
                <span className='p-1 text-2xl font-bold'>Ramen Bulbasaur</span>
                <p className='mt-2 text-sm text-center desc'>
                  Ramen avec des tranches de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    poulet
                  </span>{' '}
                  grillé, des légumes verts frais et une garniture en forme de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    Bulbausaur
                  </span>{' '}
                  composée de feuilles de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    nori
                  </span>{' '}
                  et de tranches de concombre
                </p>{' '}
                <div className='flex items-center justify-between m-2'>
                  <span className='m-2 text-2xl font-bold text-gray-900'>
                    8 €
                  </span>
                  <button
                    type='button'
                    className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Ajoutez
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-1/2 p-1 md:p-2'>
            <div className='relative group'>
              <img
                alt='assiette de sushis'
                className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-40'
                src={sushi4}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
                <span className='p-1 text-2xl font-bold'>
                  Sushis végétarien
                </span>
                <p className='mt-2 text-sm text-center desc'>
                  Sushis aux riz accompagné de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    concombre
                  </span>
                  , à l&apos;avocat,{' '}
                  <span className='italic font-semibold text-gray-900'>
                    aux radis
                  </span>{' '}
                  et à la tomate
                </p>{' '}
                <div className='flex items-center justify-between m-2'>
                  <span className='m-2 text-2xl font-bold text-gray-900'>
                    10 €
                  </span>
                  <button
                    type='button'
                    className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Ajoutez
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='relative w-full p-1 md:p-2'>
            <div className='relative group'>
              <img
                alt='ramen pika'
                className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-40'
                src={ramenPika}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
                <span className='p-1 text-2xl font-bold'>Ramen Pikachu</span>

                <p className='mt-2 text-center desc'>
                  Avec ses morceaux de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    poulets
                  </span>
                  , ses nouilles savoureuses et sa garniture de poulet juteux,
                  ce plat est sûr de plaire aux fans de ramen et de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    Pokémon
                  </span>{' '}
                  de tout âges.
                </p>

                <div className='pb-2 text-sm text-center desc'>
                  Vous pourrez manger{' '}
                  <span className='italic font-semibold text-gray-900'>
                    Pikachu
                  </span>{' '}
                  cuisiné avec un jaune d&apos;oeuf décoré de 2 petites olives
                  pour les yeux et 2 petits radis pour les joues
                </div>

                <div className='flex items-center justify-between'>
                  <span className='m-2 text-2xl font-bold text-gray-900'>
                    8 €
                  </span>
                  <button
                    type='button'
                    className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Ajoutez
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plat colonnes de droite */}
        <div className='flex flex-wrap w-1/2'>
          <div className='relative group'>
            <img
              alt='assiette de sushis'
              className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-50'
              src={sushi}
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
              <span className='p-1 text-2xl font-bold'>Sushis Pokéballs</span>

              <p className='mt-2 text-center desc'>
                Sushis en forme de{' '}
                <span className='italic font-semibold text-gray-900'>
                  Pokéballs
                </span>
                , le riz est teinté en rouge et blanc pour rappeler
                l&apos;emblématique design de la balle de capture. Chaque{' '}
                <span className='italic font-semibold text-gray-900'>
                  Pokémons
                </span>{' '}
                représenté est associé à des ingrédients différents, tels que le
                saumon pour{' '}
                <span className='italic font-semibold text-gray-900'>
                  Magicarpe
                </span>{' '}
                ou l&apos;avocat pour{' '}
                <span className='italic font-semibold text-gray-900'>
                  Bulbizarre
                </span>
                , pour un voyage culinaire unique.
              </p>

              <div className='flex items-center justify-between m-2'>
                <span className='m-2 text-2xl font-bold text-gray-900'>
                  10 €
                </span>
                <button
                  type='button'
                  className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Ajoutez
                </button>
              </div>
            </div>
          </div>

          <div className='w-1/2 p-1 md:p-2'>
            <div className='relative group'>
              <img
                alt='assiette de sushis'
                className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-50'
                src={sushi2}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
                <span className='p-1 text-2xl font-bold'>Sushi Yoda</span>
                <p className='mt-2 text-sm text-center desc'>
                  Sushis aux riz en forme de
                  <span className='italic font-semibold text-gray-900'>
                    Pokéballs
                  </span>
                </p>{' '}
                <div className='flex items-center justify-between m-2'>
                  <span className='m-2 text-2xl font-bold text-gray-900'>
                    10 €
                  </span>
                  <button
                    type='button'
                    className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Ajoutez
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-1/2 p-1 md:p-2'>
            <div className='relative group'>
              <img
                alt='assiette de sushis avec le sushi principal à l avocat en forme de Yoda'
                className='block object-cover object-center w-full h-full transition duration-500 rounded-lg filter group-hover:blur-sm group-hover:opacity-50'
                src={sushiYoda}
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center p-2 transition duration-500 opacity-0 group-hover:opacity-100'>
                <span className='p-1 text-2xl font-bold'>Sushi Yoda</span>
                <p className='mt-2 text-sm text-center desc'>
                  Sushis aux riz accompagné de saumon en formes d&apos;étoiles
                  avec le sushi principal à{' '}
                  <span className='italic font-semibold text-gray-900'>
                    l&apos;avocat
                  </span>{' '}
                  en forme de{' '}
                  <span className='italic font-semibold text-gray-900'>
                    Yoda
                  </span>
                </p>{' '}
                <div className='flex items-center justify-between m-2'>
                  <span className='m-2 text-2xl font-bold text-gray-900'>
                    8 €
                  </span>
                  <button
                    type='button'
                    className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                  >
                    Ajoutez
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
