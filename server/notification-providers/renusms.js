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

            await axios.post(
                "https://sms-api.renu.ac.ug/api/developer/send",
                {
                    message: msg,
                    contacts: [notification.renusmsPhoneNumber],
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
