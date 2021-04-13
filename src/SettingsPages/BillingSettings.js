import React from "react";
import "./BillingSettings.css";
import { Button } from "@material-ui/core";

function BillingSettings() {
    return (
        <div className="billingSettings">
            <div className="billingSettings__div-1">
                <h2 className="title1">Billing and payments</h2>
                <h1>Choose how you make purchases on YouTube</h1>
            </div>
            <div className="billingSettings__div-2">
                <div className="billing__sub__div">
                    <h3>Quick purchase is disabled</h3>
                    <h4>
                        You will be asked to verify your account for all YouTube
                        purchases
                    </h4>
                    <h5>
                        <a href="./purchases">
                            Learn more about purchase verification
                        </a>
                    </h5>
                </div>
                <Button className="billingSettings-button">
                    Enable Qui...
                </Button>
            </div>
        </div>
    );
}

export default BillingSettings;
