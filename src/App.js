import React, { Component } from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { FaApple, FaGithub, FaGooglePlay, FaTelegram, FaTwitter } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { Helmet } from 'react-helmet';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Zeus LN</title>
                    <meta name="description" content="A mobile Bitcoin app for Lightning Network Daemon (lnd) node operators" />
                    <meta name="keywords" cpntent="bitcoin,lightning,app,zeus,zeusln,ios,android,react,react-native,typescript" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://zeusln.app" />
                </Helmet>
                <header className="App-header">
                    <img src="zeus-black.jpg" className="App-logo" alt="Zeus logo" />
                    <img src="zeus-screenshot.jpg" className="App-screenshot" alt="Zeus screenshot" width="200" style={{ margin: 20 }} />
                    <h1>
                        Zeus
                    </h1>
                </header>
                <div className="intro">
                    <p>
                        A mobile Bitcoin app for Lightning Network Daemon (lnd) node operators
                    </p>
                </div>
                <div className="features">
                    <h2>
                        Features
                    </h2>
                    <ul>
                        <li>Runs on Android and iOS</li>
                        <li>Supports both mainnet and testnet</li>
                        <li>Send and receive funds both on-chain and via Lightning</li>
                        <li>Manage your own channels</li>
                        <li>Open private channels</li>
                        <li>Scan and generate QR codes for payments and connecting to nodes</li>
                        <li>Support for lndconnect and BTCPayServer QR codes</li>
                        <li>100% open source</li>
                        <li>No proprietary dependencies</li>
                        <li>No user tracking. Ever.</li>
                    </ul>
                </div>
                <IconContext.Provider value={{ color: 'white', size: 100, style: { margin: 15 } }}>
                    <a href="https://github.com/ZeusLN/zeus">
                        <FaGithub />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.zeusln.zeus">
                        <FaGooglePlay />
                    </a>
                    <a href="https://testflight.apple.com/join/gpVFzEHN">
                        <FaApple />
                    </a>
                    <a href="https://github.com/ZeusLN/zeus/releases">
                        <DiAndroid />
                    </a>
                    <a href="https://t.me/ZeusLN">
                        <FaTelegram />
                    </a>
                    <a href="https://twitter.com/ZeusLN">
                        <FaTwitter />
                    </a>
                </IconContext.Provider>
                <div style={{ paddingTop: 40 }}>
                    <a href="https://github.com/ZeusLN/zeus/issues/new/choose">
                        <div className="button">
                            Submit an Issue
                        </div>
                    </a>
                    <a href="https://1ml.com/node/03b053229a315d4071520d7466f50b91be0edad375122c15932ba3334539a72a6c">
                        <div className="button">
                            Connect to our Node
                        </div>
                    </a>
                </div>
                <img src="nebuchadnezzar.png" alt="Zeus node QR" width={250} height={250} />
                <div className="footer">
                    <h1>
                        #RunYourOwnNode
                    </h1>

                    <p>
                        Made in NYC with love by <a href="https://twitter.com/evankaloudis">@evankaloudis</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default App;
