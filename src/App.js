import React from "react";
import "./App.css";
import Header from "./pages/home/Header";
import Sidebar from "./components/sidebar/Sidebar";
import TabsList from "./components/tabsList/TabsList";
import RecommendedVideos from "./pages/home/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./pages/searchResults/SearchResults";
import WatchVideo from "./pages/watchVideo/WatchVideo";
import Trending from "./pages/explore/Trending";
import History from "./pages/history/History";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Library from "./pages/library/Library";
import WatchLater from "./pages/watchLater/WatchLater";
import LikedVideos from "./pages/liked/LikedVideos";
import YourVideos from "./pages/broken/YourVideos";
import SettingsSidebar from "./components/sidebar/SettingsSidebar";
import AccountSettings from "./Pages/settings/AccountSettings";
import NotificationSettings from "./pages/settings/NotificationSettings";
import PlaybackSettings from "./pages/settings/PlaybackSettings";
import PrivacySettings from "./pages/settings/PrivacySettings";
import ConnectedApps from "./pages/settings/ConnectedApps";
import BillingSettings from "./pages/settings/BillingSettings";
import AdvSettings from "./pages/settings/AdvSettings";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />

                <Switch>
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
