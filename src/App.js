import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TabsList from "./TabsList";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./VideoWatch/SearchResults";
import WatchVideo from "./VideoWatch/WatchVideo";
import Trending from "./Trending";
import History from "./History";
import Subscriptions from "./Subscriptions";
import Library from "./Library";
import WatchLater from "./WatchLater";
import LikedVideos from "./LikedVideos";
import YourVideos from "./YourVideos";
import SettingsSidebar from "./SettingsPages/SettingsSidebar";
import AccountSettings from "./SettingsPages/AccountSettings";
import NotificationSettings from "./SettingsPages/NotificationSettings";
import PlaybackSettings from "./SettingsPages/PlaybackSettings";
import PrivacySettings from "./SettingsPages/PrivacySettings";
import ConnectedApps from "./SettingsPages/ConnectedApps";
import BillingSettings from "./SettingsPages/BillingSettings";
import AdvSettings from "./SettingsPages/AdvSettings";
import ChannelPage from "./Channel/ChannelPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />

                <Switch>
                    <Route path="/Channel">
                        <div className="app__page">
                            <Sidebar />
                            <ChannelPage />
                        </div>
                    </Route>
                    <Route path="/AdvancedSettings">
                        <div className="app__page">
                            <SettingsSidebar />
                            <AdvSettings />
                        </div>
                    </Route>
                    <Route path="/Billing&Payments">
                        <div className="app__page">
                            <SettingsSidebar />
                            <BillingSettings />
                        </div>
                    </Route>
                    <Route path="/ConnectedApps">
                        <div className="app__page">
                            <SettingsSidebar />
                            <ConnectedApps />
                        </div>
                    </Route>
                    <Route path="/PrivacySettings">
                        <div className="app__page">
                            <SettingsSidebar />
                            <PrivacySettings />
                        </div>
                    </Route>
                    <Route path="/Playback&Performance">
                        <div className="app__page">
                            <SettingsSidebar />
                            <PlaybackSettings />
                        </div>
                    </Route>
                    <Route path="/NotificationSettings">
                        <div className="app__page">
                            <SettingsSidebar />
                            <NotificationSettings />
                        </div>
                    </Route>
                    <Route path="/AccountSettings">
                        <div className="app__page">
                            <SettingsSidebar />
                            <AccountSettings />
                        </div>
                    </Route>
                    <Route path="/Settings">
                        <div className="app__page">
                            <SettingsSidebar />
                            <AccountSettings />
                        </div>
                    </Route>
                    <Route path="/YourVideos">
                        <div className="app__page">
                            <YourVideos />
                        </div>
                    </Route>
                    <Route path="/LikedVideos">
                        <div className="app__page">
                            <Sidebar />
                            <LikedVideos />
                        </div>
                    </Route>
                    <Route path="/WatchLater">
                        <div className="app__page">
                            <Sidebar />
                            <WatchLater />
                        </div>
                    </Route>
                    <Route path="/Library">
                        <div className="app__page">
                            <Sidebar />
                            <Library />
                        </div>
                    </Route>
                    <Route path="/Subscriptions">
                        <div className="app__page">
                            <Sidebar />
                            <Subscriptions />
                        </div>
                    </Route>

                    <Route path="/History">
                        <div className="app__page">
                            <Sidebar />
                            <History />
                        </div>
                    </Route>

                    <Route path="/Explore">
                        <div className="app__page">
                            <Sidebar />
                            <Trending />
                        </div>
                    </Route>

                    <Route path="/video">
                        <WatchVideo />
                    </Route>

                    <Route path="/search/:searchItem">
                        <div className="app__page">
                            <Sidebar />
                            <SearchResults />
                        </div>
                    </Route>

                    <Route exact path="/">
                        <div className="app__page">
                            <Sidebar />

                            <div className="app__recommendedVideos">
                                <div className="bar__section">
                                    <TabsList />
                                </div>

                                <RecommendedVideos />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
