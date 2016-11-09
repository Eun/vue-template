<template src="./view.html"></template>
<style src="./view.scss" lang="sass" scoped></style>
<script>
import {router} from '../../index';
export default {
    data() {
        return {
            content: 'Hello Site2'
        }
    },
    methods: {
    	goBack(e) {
    		e.preventDefault();
    		router.go(-1);
    	}
    }
}
</script>