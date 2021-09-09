import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Pages/home/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import TabsList from "./Components/tabsList/TabsList";
import RecommendedVideos from "./Pages/home/RecommendedVideos";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
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
import Login from "./Pages/login/Login";


function App() {
    const [sidebar, setSidebar] = useState(false);
    const handleSetSidebar = () => setSidebar(!sidebar);

    /*
        I am commenting out the following code because for some reason
        the history hook wont work. will get back to this some time later 

        const {accessToken, loading} = useSelector(state => state.auth.accessToken);

        const history = useHistory()

        useEffect(() => {
            if (!accessToken && !loading) {
                history.push("/auth");
            }
        }, [accessToken, loading, history])
    */


    return (
        <div className="app">
                <Switch>
                    <Route path="/auth">
                        <Login />
                    </Route>
                    <Route path="/AdvancedSettings">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                        
                            <SettingsSidebar />
                            <AdvSettings />
                        </div>
                    </Route>
                    <Route path="/Billing&Payments">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <BillingSettings />
                        </div>
                    </Route>
                    <Route path="/ConnectedApps">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <ConnectedApps />
                        </div>
                    </Route>
                    <Route path="/PrivacySettings">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <PrivacySettings />
                        </div>
                    </Route>
                    <Route path="/Playback&Performance">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <PlaybackSettings />
                        </div>
                    </Route>
                    <Route path="/NotificationSettings">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <NotificationSettings />
                        </div>
                    </Route>
                    <Route path="/AccountSettings">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <AccountSettings />
                        </div>
                    </Route>
                    <Route path="/Settings">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <SettingsSidebar />
                            <AccountSettings />
                        </div>
                    </Route>
                    <Route path="/YourVideos">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <YourVideos />
                        </div>
                    </Route>
                    <Route path="/LikedVideos">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <LikedVideos />
                        </div>
                    </Route>
                    <Route path="/WatchLater">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <WatchLater />
                        </div>
                    </Route>
                    <Route path="/Library">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Library />
                        </div>
                    </Route>
                    <Route path="/Subscriptions">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Subscriptions />
                        </div>
                    </Route>

                    <Route path="/History">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <History />
                        </div>
                    </Route>

                    <Route path="/Explore">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <Trending />
                        </div>
                    </Route>

                    <Route path="/video">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <WatchVideo />
                        </div>
                        
                    </Route>

                    <Route path="/search/:searchItem">
                        <Header toggleSidebar={handleSetSidebar}/>
                        <div className="app__page">
                            <Sidebar sidebar={sidebar} toggleSidebar={handleSetSidebar}/>
                            <SearchResults />
                        </div>
                    </Route>

                    <Route exact path="/">
                        <Header toggleSidebar={handleSetSidebar}/>
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
                    <Route>
                        <Redirect to="/"/>
                    </Route>
                </Switch>

        </div>
    );
}

export default App;
