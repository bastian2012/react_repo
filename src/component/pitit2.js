import React from 'react';

const Pitit2 = () => {
    return (
        <form
            style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
            }}
        >
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <label
                htmlFor="name"
                style={{ display: 'block', marginBottom: '10px' }}
            >
                Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            />

            <label
                htmlFor="email"
                style={{ display: 'block', marginBottom: '10px' }}
            >
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            />

            <label
                htmlFor="message"
                style={{ display: 'block', marginBottom: '10px' }}
            >
                Message:
            </label>
            <textarea
                id="message"
                name="message"
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            ></textarea>

            <button
                type="submit"
                style={{
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default Pitit2;
