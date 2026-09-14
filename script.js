* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-family: Arial, sans-serif;
    color: white;
    background-image: url("./background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x: hidden;
}

.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.58);
    z-index: 0;
}

.hero {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
}

.glass-box {
    width: 100%;
    max-width: 480px;
    padding: 42px 35px;
    text-align: center;

    background: rgba(20, 20, 20, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 24px;

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    box-shadow:
        0 25px 70px rgba(0, 0, 0, 0.55),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);

    animation: appear 0.8s ease;
}

.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.brand span {
    font-size: 30px;
}

.brand h1 {
    font-size: 32px;
    letter-spacing: 6px;
}

.tagline {
    font-size: 11px;
    letter-spacing: 4px;
    color: #aaa;
    margin-bottom: 30px;
}

.auth-box {
    text-align: left;
}

.auth-box h2 {
    text-align: center;
    font-size: 27px;
    margin-bottom: 7px;
}

.auth-subtitle {
    text-align: center;
    color: #aaa;
    font-size: 14px;
    margin-bottom: 25px;
}

input {
    width: 100%;
    padding: 15px 17px;
    margin-bottom: 14px;

    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;

    background: rgba(255, 255, 255, 0.08);
    color: white;

    font-size: 15px;
    outline: none;

    transition: 0.25s;
}

input::placeholder {
    color: #999;
}

input:focus {
    border-color: rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.12);
}

button {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.25s;
}

.primary-btn {
    border: none;
    background: white;
    color: #111;
    margin-top: 4px;
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.18);
}

.secondary-btn {
    margin-top: 10px;
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.secondary-btn:hover {
    background: rgba(255, 255, 255, 0.08);
}

.logout-btn {
    margin-top: 10px;
    background: transparent;
    color: #aaa;
    border: none;
    font-size: 13px;
}

.logout-btn:hover {
    color: white;
}

#authMessage {
    text-align: center;
    margin-top: 18px;
    font-size: 14px;
}

.user-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    color: #aaa;
    font-size: 13px;
}

.status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #777;
}

@keyframes appear {
    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 600px) {

    .hero {
        padding: 20px 15px;
    }

    .glass-box {
        padding: 35px 22px;
    }

    .brand h1 {
        font-size: 26px;
    }

    .brand span {
        font-size: 25px;
    }
}
