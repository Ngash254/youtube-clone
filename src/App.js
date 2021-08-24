import React, { useState } from "react";
import "./App.css";
import Header from "./Pages/home/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import TabsList from "./Components/tabsList/TabsList";
import RecommendedVideos from "./Pages/home/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "./Pages/searchResults/SearchResults";
import WatchVideo from "./Pages/watchVideo/WatchVideo";
import Trending from "./Pages/explore/Trending";
import History from "./Pages/history/History";
import Subscriptions from "./Pages/subscriptions/Subscriptions";
import Library from "./Pages/library/Library";
import WatchLater from "./Pages/watchLater/WatchLater";
import LikedVideos from "./Pages/liked/LikedVideos";
import YourVideos from "./Pages/broken/YourVideos";
import SettingsSidebar from "./Components/sidebar/SettingsSidebar";
import AccountSettings from "./Pages/settings/AccountSettings";
import NotificationSettings from "./Pages/settings/NotificationSettings";
import PlaybackSettings from "./Pages/settings/PlaybackSettings";
import PrivacySettings from "./Pages/settings/PrivacySettings";
import ConnectedApps from "./Pages/settings/ConnectedApps";
import BillingSettings from "./Pages/settings/BillingSettings";
import AdvSettings from "./Pages/settings/AdvSettings";

function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSetSidebar = () => setSidebar(!sidebar);

    return (
        <div className="app">
            <Router>
                <Header toggleSidebar={handleSetSidebar}/>

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
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <LikedVideos />
                        </div>
                    </Route>
                    <Route path="/WatchLater">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <WatchLater />
                        </div>
                    </Route>
                    <Route path="/Library">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Library />
                        </div>
                    </Route>
                    <Route path="/Subscriptions">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Subscriptions />
                        </div>
                    </Route>

                    <Route path="/History">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <History />
                        </div>
                    </Route>

                    <Route path="/Explore">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Trending />
                        </div>
                    </Route>

                    <Route path="/video">
                        <div className="app__page">
                            <WatchVideo />
                        </div>
                        
                    </Route>

                    <Route path="/search/:searchItem">
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <SearchResults />
                        </div>
                    </Route>

                    <Route exact path="/">
                        <div className="app__page">
                            <Sidebar 
                                sidebar={sidebar} 
                                toggleSidebar={handleSetSidebar}
                                
                            />

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
