<template>
	<div v-if="loading">
		<loader></loader>
	</div>
	<div v-else-if="error">
		<error></error>
	</div>
	<div v-else class="content">
		<h1 class="telebista-saioa__title">{{ show.title }}</h1>
 		<d-player theme="#3069c7" lang="en" :video="show"></d-player>
	</div>
</template>

<script>
	import axios from 'axios';
	import Loader from './Loader.vue';
	import Error from './Error.vue';
	import VueDplayer from 'vue-dplayer';

	export default {
		data() {
			return {
				loading: true,
				error: null,
				id: atob(this.$route.params.id64),
				show: {}
			}
		},
		created() {
			this.getShow();
		},
		watch: {
			'$route': 'getShow'
		},
		components: {
			Loader,
			'd-player': VueDplayer,
			Error
		},
		methods: {
			getShow() {
				axios.get(`${this.id}`)
					.then(response => {
						this.loading = false;

						this.show.title = response.data.title;
						this.show.pic = response.data.thumbnail;
						this.show.url = response.data.formats
							.filter(video => {
								return video.ext === 'mp4';
							})
							.sort((a,b) => {
								return b.width - a.width;
							})[0].url;

					})
					.catch((error) => {
						this.loading = false
						this.error = error;
						console.log(error);
					});
			}
		}
	}
</script>

<style lang="scss">
	.telebista-saioa__title {
		font-size: 1rem;
	}
</style>