/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'tailwindcss/tailwind.css';

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [nbPersonnes, setNbPersonnes] = useState(1);
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [error, setError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmitReservation = (event) => {
    event.preventDefault();

    if (email !== '') {
      setModalIsOpen(true);
      setEmail('');
      setTel('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className='flex justify-center mt-14' id='reservation'>
      <form className='w-full max-w-lg' onSubmit={handleSubmitReservation}>
        <div className='flex justify-center pb-4 text-3xl font-bold'>
          <h2 style={{ fontFamily: 'Shojumaru' }}>Réservez</h2>
        </div>

        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className=''>Vous souhaitez réservez une table,</div>

          <div className='mb-4'>
            choisissez votre date et nous nous répondrons rapidement pour
            valider la réservation.
          </div>

          <div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='tel'
            >
              téléphone
            </label>

            <input
              className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white'
              id='tel'
              type='text'
              value={tel}
              placeholder='06 03 ....'
              onChange={(event) => setTel(event.target.value)}
            />
          </div>

          <div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='email'
            >
              Email
            </label>

            <input
              className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white'
              id='email'
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='dark-vador@gmail.com'
            />

            {error && email === '' && (
              <p className='text-xs italic text-red-500'>Champ obligatoire</p>
            )}
          </div>
        </div>

        <div className='flex flex-wrap mb-2 -mx-3'>
          <div className='w-full px-3 mb-6 md:w-1/3 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='selectedDate'
            >
              Date
            </label>

            <DatePicker
              id='selectedDate'
              selected={selectedDate}
              onChange={(selectedDate) => setSelectedDate(selectedDate)}
              minDate={new Date()}
              className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm'
            />
          </div>

          <div className='w-full px-3 mb-6 md:w-1/3 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='nbPersonnes'
            >
              nombre de personnes
            </label>
            <div className='relative'>
              <select
                id='nbPersonnes'
                value={nbPersonnes}
                onChange={(event) =>
                  setNbPersonnes(parseInt(event.target.value))
                }
                className='w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </div>

            <div className='flex justify-center my-4'>
              <button
                type='submit'
                className='px-4 py-2 text-white bg-red-500 border-b-4 border-red-600 rounded hover:bg-red-400 hover:border-red-500'
              >
                Réservez
              </button>
            </div>
          </div>
        </div>
      </form>

      {modalIsOpen && (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <div
              className='fixed inset-0 bg-gray-500 opacity-75'
              onClick={() => setModalIsOpen(false)}
            ></div>
            <div className='fixed inset-0 transition-opacity'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen'></span>
            &#8203;
            <div
              className='inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
              role='dialog'
              aria-modal='true'
              aria-labelledby='modal-headline'
            >
              <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
                <h3 className='mb-2 text-lg font-medium leading-6 text-gray-900'>
                  Réservation confirmée
                </h3>
                <p className='mb-4'>
                  Vous avez réservé une table pour {nbPersonnes} personnes le{' '}
                  {selectedDate.toLocaleDateString()}. Nous confirmerons votre
                  confirmation rapidement par mail ou téléphone.
                </p>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className='px-2 py-1 mt-4 text-white bg-red-500 rounded hover:bg-red-600'
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
