import React, { useState, useEffect } from 'react';
import Card from '../card/Card';

const Form = () => {
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [number, setNumber] = useState('');
    let [nat, setNat] = useState('Uzbek');
    let [desc, setDesc] = useState('');
    let [users, setUsers] = useState([]);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(savedUsers);
    }, []);

    const saveToLocalStorage = (usersArray) => {
        localStorage.setItem('users', JSON.stringify(usersArray));
    };

    function handleClick(e) {
        e.preventDefault();

        if (username.length < 3) {
            alert("Ismingiz kamida 3ta harfdan iborat bo'lishi kerak...");
            return;
        }

        if (username === '' || email === '' || number === '' || nat === '' || desc === '') {
            return alert("Formani to'ldiring....🤬🤬🤬🤬😡😡😡");
        }

        let userObj = {
            username: username,
            email: email,
            number: number,
            nat: nat,
            desc: desc,
            id: Date.now(),
        };

        let copied = [...users, userObj];
        setUsers(copied);
        saveToLocalStorage(copied);

        setUsername('');
        setEmail('');
        setNumber('');
        setDesc('');
    }

    const handleDelete = (id) => {
        let copied = [...users];
        const filteredUsers = copied.filter((v) => v.id !== id);
        
        const deletedUser = copied.find((v) => v.id === id);
        const deletedUsers = JSON.parse(localStorage.getItem('deletedUsers')) || [];
        deletedUsers.push(deletedUser);
        localStorage.setItem('deletedUsers', JSON.stringify(deletedUsers));

        setUsers(filteredUsers);
        saveToLocalStorage(filteredUsers);
    };

    return (
        <div>
            <form className="flex flex-col max-w-[1000px] mt-20 border border-blue-500 p-10 rounded-2xl m-auto placeholder:font-bold">
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    className='mb-5 border border-black outline-none ps-5 py-3 rounded-md placeholder:font-bold'
                    type="text"
                    placeholder='Enter username...'
                    value={username}
                />
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className='mb-5 border border-black outline-none ps-5 py-3 rounded-md placeholder:font-bold'
                    type="email"
                    placeholder='Enter email...'
                    value={email}
                />
                <input
                    onChange={(event) => setNumber(event.target.value)}
                    className='mb-5 border border-black outline-none ps-5 py-3 rounded-md placeholder:font-bold'
                    type="number"
                    placeholder='Enter phone...'
                    value={number}
                />
                <select
                    onChange={(event) => setNat(event.target.value)}
                    className='border border-black rounded-md px-5 mb-6 py-3'
                    value={nat}
                >
                    <option value="Uzbek">Uzbek</option>
                    <option value="Russian">Russian</option>
                    <option value="English">English</option>
                </select>
                <textarea
                    onChange={(event) => setDesc(event.target.value)}
                    placeholder='Enter description....'
                    className='resize-none border border-black outline-none ps-5 py-3 rounded-md placeholder:font-bold'
                    value={desc}
                ></textarea>
                <button
                    onClick={handleClick}
                    className='border border-blue-500 hover:border-[aqua] max-w-max mt-5 px-12 py-2 text-xl m-auto rounded-md text-blue-500 hov'
                >
                    Save
                </button>
            </form>
            <div className='border border-black p-10 my-20 max-w-[1100px] m-auto rounded-xl flex flex-wrap gap-2'>
                {users.length > 0 && users.map((v) => <Card key={v.id} data={v} onDelete={handleDelete} />)}
            </div>
        </div>
    );
};

export default Form;
