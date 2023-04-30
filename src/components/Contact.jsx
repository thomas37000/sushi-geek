import { useState } from 'react';

const Contact = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation des champs
    if (prenom !== '' && nom !== '' && email !== '' && message !== '') {
      setModalIsOpen(true);
      setPrenom('');
      setNom('');
      setEmail('');
      setMessage('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div
      id='contact'
      className='container flex justify-center px-5 py-2 mx-auto lg:px-32 lg:pt-24'
    >
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <div className='flex justify-center pb-4 text-3xl font-bold'>
          <h2 style={{ fontFamily: 'Shojumaru' }}>Contact</h2>
        </div>

        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3 mb-6 md:w-1/2 md:mb-0'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='grid-first-name'
            >
              Prénom <span className='text-red-400'>*</span>
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='prenom'
              value={prenom}
              onChange={(event) => setPrenom(event.target.value)}
              placeholder='Jackie'
            />
            {error && prenom === '' && (
              <p className='text-xs italic text-red-500'>Champ obligatoire</p>
            )}
          </div>

          <div className='w-full px-3 md:w-1/2'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='grid-last-name'
            >
              Nom <span className='text-red-400'>*</span>
            </label>
            <input
              className='block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              id='nom'
              value={nom}
              onChange={(event) => setNom(event.target.value)}
              placeholder='Chan'
            />
            {error && nom === '' && (
              <p className='text-xs italic text-red-500'>Champ obligatoire</p>
            )}
          </div>
        </div>

        <div className='flex flex-wrap mb-6 -mx-3'>
          <div className='w-full px-3'>
            <label
              className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'
              htmlFor='grid-password'
            >
              Email <span className='text-red-400'>*</span>
            </label>
            <input
              className='block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500'
              type='email'
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='bruce-lee@gmail.com'
            />
            {error && email === '' && (
              <p className='text-xs italic text-red-500'>Champ obligatoire</p>
            )}
          </div>
        </div>

        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Votre message <span className='text-red-400'>*</span>
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='un remerciement, une suggestion...'
        ></textarea>
        {error && message === '' && (
          <p className='text-xs italic text-red-500'>Champ obligatoire</p>
        )}

        <div className='flex justify-center my-4'>
          <button
            type='submit'
            className='px-4 py-2 text-white bg-red-500 border-b-4 border-red-600 rounded hover:bg-red-400 hover:border-red-500'
          >
            Envoyez
          </button>
        </div>
      </form>

      {modalIsOpen && (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div
              className='fixed inset-0 bg-gray-500 opacity-75'
              onClick={() => setModalIsOpen(false)}
            ></div>
            <div className='z-10 p-8 bg-white rounded-lg'>
              <h2 className='mb-4 text-2xl text-center text-red-500'>
                Message envoyé
              </h2>
              <div>
                Nous vous répondrons rapidement pour répondre à votre question.
              </div>
              <div>Nous éspérons vous revoir rapidement.</div>
              <div className='flex justify-center'>
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

export default Contact;
