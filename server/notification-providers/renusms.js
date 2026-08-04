const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class RenuSMS extends NotificationProvider {
    name = "renusms";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        const okMsg = "Sent Successfully.";

        try {
            let config = {
                headers: {
                    Authorization: `Bearer ${notification.renusmsApiToken}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            config = this.getAxiosConfigWithProxy(config);

            const contacts = String(notification.renusmsPhoneNumber || "")
                .split(",")
                .map((n) => n.trim())
                .filter(Boolean);

            await axios.post(
                "https://sms-api.renu.ac.ug/api/developer/send",
                {
                    message: msg,
                    contacts,
                },
                config
            );

            return okMsg;
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }
}

module.exports = RenuSMS;
