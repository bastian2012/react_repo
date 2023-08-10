import React from 'react';

const Pitit1 = () => {
    return (
        <div style={styles.fanPage}>
            <header style={styles.fanHeader}>
                <h1>Welcome to the Fan Page!</h1>
                <p>Explore and enjoy the content created just for our amazing fans.</p>
            </header>
            <section >
                <div style={styles.fanPost}>
                    <h2>Fan Art Showcase</h2>
                    <div className="art-gallery">
                        {/* Fan art images go here */}
                    </div>
                </div>
                <div style={styles.fanPost}>
                    <h2>Behind-the-Scenes</h2>
                    <p>Get an exclusive look at the making of our latest project.</p>
                </div>
                <div style={styles.fanPost}>
                    <h2>Fan Theories</h2>
                    <p>Read and discuss intriguing fan theories about the series.</p>
                </div>
            </section>
            <footer style={styles.fanFooter}>
                <p>Connect with us on social media:</p>
                {/* Social media icons and links */}
            </footer>
        </div>
    );
};

const styles = {
    fanPage: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    },
    fanHeader: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        marginBottom: '20px',
    },
    fanContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    fanPost: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '20px',
    },
    fanFooter: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
    },
};

export default Pitit1;