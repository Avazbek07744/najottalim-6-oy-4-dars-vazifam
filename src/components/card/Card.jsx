import React from 'react';

const Card = ({ data, onDelete }) => {
    if (!data) {
        return null;
    }

    let { username, email, number, nat, desc, id } = data;

    const handleDeleteClick = () => {
        onDelete(id);
    };

    return (
        <div>
            <div className="card border border-[aqua] w-[250px] p-3 rounded-xl">
                <h2 className='text-[aqua] font-bold text-2xl mb-1'>username: {username}</h2>
                <h3 className='text-[aqua] font-bold text-xl mb-1'>email: {email}</h3>
                <h3 className='text-[aqua] font-bold text-xl mb-1'>number: {number}</h3>
                <h3 className='text-[aqua] font-bold text-xl mb-1'>nationality: {nat}</h3>
                <h3 className='text-[aqua] font-bold text-xl mb-1'>description: {desc}</h3>
                <button onClick={handleDeleteClick} className='border border-[aqua] px-3 py-1 text-xl text-[aqua] font-bold rounded-xl mt-5 hov'>Delete</button>
            </div>
        </div>
    );
};

export default Card;
