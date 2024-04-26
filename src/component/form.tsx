import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>Yay... Correct Answer!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (error) {
      setStatus('typing');
      setError(error);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <div className="w-full max-w-xs">
        <h2>Tebak Nama Hewan</h2>
        <p>WHewan apa yang ditakuti doraemon?</p>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400" onSubmit={handleSubmit}>
          <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
          <br />
          <button className="bg-blue-400 p-2 m-2 rounded text-sm text-white" disabled={answer.length === 0 || status === 'submitting'}>
            Submit
          </button>
          {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
        </form>
      </div>
    </>
  );
}

function submitForm(answer) {
  // Consider this code do "request"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'tikus'
      if (shouldError) {
        reject(new Error('Tebakan yang bagus, tapi jawaban itu salah. Coba lagi!'));
      } else {
        resolve();
      }
    }, 500); // set timeout about 0,5 second
  });
}

export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
      <>
        <h2>Please fill in your full name</h2>
        <label className="block w-full m-2">
            First name:
            <input className="text-sm text-black ml-2 rounded"
                value={firstName}
                onChange={handleFirstNameChange}
            />
        </label>

        <label className="block w-full m-2">
            Last name:
            <input className="text-sm text-black ml-2 rounded"
            value={lastName}
            onChange={handleLastNameChange}
            />
        </label>
        <p>Your Full name is : <b className="text-blue-600">{fullName}</b></p>
      </>
    )
}