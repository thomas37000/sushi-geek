import chef from '../assets/personnel/chef.webp';
import chef2 from '../assets/personnel/chef2.webp';
import cuisiniere from '../assets/personnel/cuisiniere.webp';
import sallePokemon from '../assets/restaurant/sallePokemon.webp';
import salleStarWars from '../assets/restaurant/salleStarWars.webp';

const Equipe = () => {
  return (
    <div className='container px-5 py-2 mx-auto lg:px-32 lg:pt-24' id='equipe'>
      <div className='grid gap-4'>
        <div className='flex justify-center text-3xl font-bold'>
          <h2 style={{ fontFamily: 'Shojumaru' }}>Equipe</h2>
        </div>

        <div className='text-center'>
          Notre équipe sera heureurse de vous accueillir au{' '}
          <span style={{ fontFamily: 'Shojumaru' }} className='text-red-500'>
            Sushi Geek
          </span>{' '}
          pour vous préparer des plats traditionnels du Japon, à la sauce Geek
          inspiré de l&apos;univers{' '}
          <span className='italic font-semibold text-gray-900'>Pokemon</span> et{' '}
          <span className='italic font-semibold text-gray-900'>Star Wars</span>
        </div>

        <div className='grid grid-cols-5 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src={salleStarWars}
              alt='salle Star Wars Sushi Geek'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src={chef}
              alt='Propriétaire du Sushi Geek'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src={cuisiniere}
              alt='cuisinière Sushi Geek'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src={chef2}
              alt='chef cuisinier du Sushi Geek'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src={sallePokemon}
              alt='salle Pokémon Sushi Geek'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
