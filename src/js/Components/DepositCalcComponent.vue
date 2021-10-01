<template>
    <div class="row">
        <div class="col-md-5">
            <h2>Just Your First Comp</h2>
            <b-form-group>
                <b-form-input v-model="text" placeholder="Enter a string with digits and spaces" @input="forceUpdateRawText"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button variant="danger" @click="removeSpaces">Remove spaces</b-button>
                <b-button variant="danger" @click="removeDigits">Remove digits</b-button>
                <b-button variant="danger" @click="removeLetters">Remove letters</b-button>
            </b-form-group>
            <b-form-group>
                <b-button variant="success" @click="returnRawText">Return raw text</b-button>
            </b-form-group>
            <div class="mt-2">Your text as is: {{ text }}</div>
            <div class="mt-2">Your text without spaces: {{ textWithoutSpaces }}</div>
            <div class="mt-2">Your text without digits: {{ textWithoutDigits }}</div>
            <div class="mt-2">Your text without letters: {{ textWithoutLetters }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Just your first app with Vue Js and Bootstrap-vue.')
        },
        data() {
            return {
                text: '',
                rawText: '',
                spacesFilter: false,
                digitsFilter: false,
                lettersFilter: false,
            }
        },
        computed: {
            textWithoutSpaces() {
                return this.replaceSpaces(this.text);
            },
            textWithoutDigits() {
                return this.replaceDigits(this.text);
            },
            textWithoutLetters() {
                return this.replaceLetters(this.text);
            },
        },
        methods: {
            returnRawText(){
                this.resetFilters();
                this.text = this.rawText;
            },
            forceUpdateRawText(){
                this.rawText = this.text;
            },
            updateRawText(){
                if(this.isNoFilters()){
                    this.rawText = this.text;
                }
            },
            removeSpaces(){
                this.updateRawText();
                this.spacesFilter = true;
                this.text = this.replaceSpaces(this.text);
            },
            removeDigits(){
                this.updateRawText();
                this.digitsFilter = true;
                this.text = this.replaceDigits(this.text);
            },
            removeLetters(){
                this.updateRawText();
                this.lettersFilter = true;
                this.text = this.replaceLetters(this.text);
            },
            isNoFilters(){
               return !(this.spacesFilter || this.digitsFilter || this.lettersFilter);
            },
            resetFilters(){
                this.spacesFilter = this.digitsFilter = this.lettersFilter = false;
            },
            replaceSpaces(text){
                return text.replace(/\s+/g, '');
            },
            replaceDigits(text){
                return text.replace(/\d+/g, '');
            },
            replaceLetters(text){
                return text.replace(/\D+/g, '');
            }
        }
    }
</script>
