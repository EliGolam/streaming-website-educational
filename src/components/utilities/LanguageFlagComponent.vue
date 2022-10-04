<template>
	<div class="language flex-center">
		<p>Original Language:</p>
		<img :src="flagSrc" alt="" @error="flagNotFoundError($event)" />
	</div>
</template>

<script>
export default {
    name: 'LanguageFlag',
    props: {
        language: String,
    }, 
    data() {
        return {
            FLAG_API: {
                base_url: "https://countryflagsapi.com/",
                fileType: "png/",
            },
        }
    },

    // COMPUTED PROPERTIES
    computed: {
        flagSrc() {
            const { base_url, fileType } = this.FLAG_API;
            return base_url + fileType + this.getFlagID(this.language);
        },
    },
    // END COMPUTED

    // METHODS
    methods: {
        getFlagID(countryCode) {
            switch (countryCode) {
                case 'en': {
                    return 'gb';
                }
                case 'ja': {
                    return 'jp';
                }
                default: {
                    return countryCode;
                }
            }
        },

        flagNotFoundError(event) {
            console.warn("Flag Not Found:", event);
        }
    }
    // END METHODS
}
</script>

<style lang="scss" scoped>
.language {
	gap: 1rem;
}

img {
  width: 20px;
}
</style>