<template>
    <div class="mb-3">
        <label for="renusms-api-token" class="form-label">{{ $t("API Token") }}</label>
        <i18n-t tag="div" class="form-text" keypath="wayToGetRenuSMSToken">
            <a href="https://sms-api.renu.ac.ug/" target="_blank">{{ $t("here") }}</a>
        </i18n-t>
        <HiddenInput
            id="renusms-api-token"
            v-model="$parent.notification.renusmsApiToken"
            :required="true"
            autocomplete="new-password"
        ></HiddenInput>
    </div>
    <div class="mb-3">
        <label for="renusms-phoneNumber" class="form-label">{{ $t("Recipient Number") }}</label>
        <input
            id="renusms-phoneNumber"
            v-model="$parent.notification.renusmsPhoneNumber"
            type="text"
            class="form-control"
            placeholder="2567XXXXXXXX or 2567AAA,2567BBB"
            required
        />
        <div class="form-text">{{ $t("renusmsPhoneNumberDescription") }}</div>
    </div>
</template>
<script>
import HiddenInput from "../HiddenInput.vue";

export default {
    components: {
        HiddenInput,
    },
};
</script>
