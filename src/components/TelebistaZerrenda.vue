<template>
	<div v-if="loading">
		<loader></loader>
	</div>
	<div v-else-if="error">
		<error></error>
	</div>
	<div v-else class="content">
		<h1>{{ name }}</h1>
		<ul class="zerrenda">
			<router-link v-for="list in tvList" tag="li" :to="`/telebista/saioa/${list.id64}`" :key="list.id64" class="zerrenda__item">
				<figure class="zerrenda__figure"><img :src="list.image" alt=""></figure>
				<a class="zerrenda__link">{{ list.title }}</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import Loader from './Loader.vue';
	import Error from './Error.vue';

	export default {
		data() {
			return {
				loading: true,
				error: null,
				id: atob(this.$route.params.id64),
				tvList: [],
				name: '',
				type: 'tv'
			}
		},
		created() {
			this.getTvList()
		},
		watch: {
			'$route': 'getTvList'
		},
		components: {Loader, Error},
		methods: {
			getTvList() {
				axios.get(`${this.id}`.slice(5))
					.then(response => {
						this.loading = false;

						this.name = response.name;

						this.tvList = response.data.member.map(show => {
							return {
								title: show.title,
								id: show['@id'],
								id64: btoa(show['@id']),
								broadcast_date: show.broadcast_date,
								description: show.description,
								image: show.episode_image,
							};
						});
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
	.zerrenda {
		width: 100%;
		padding:0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		margin-top: -10px;
		margin-left: -10px;
	}

	.zerrenda__item {
		display: flex;
		border: 1px solid rgba(grey, 0.5);
		margin-top: 10px;
		margin-left: 10px;
		width: 100%;
		height: 100px;
		flex: 1 0 auto;
		align-items: center;
		border-radius: 3px;
		overflow: hidden;
	}
	.zerrenda__figure {
		margin: 0;
		width: 120px;
		min-width: 120px;
		height: 100%;
		overflow: hidden;

		img {
			display: block;
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}
	.zerrenda__link {
		padding: 0 10px;
		flex: 1 1 auto;
	}

	@media screen and (min-width: 850px) {
		.zerrenda__item {
			flex: 1 0 calc(50% - 10px);
			max-width: calc(50% - 10px);
		}
	}

	@media screen and (min-width: 1300px) {
		.zerrenda__item {
			flex: 1 0 calc(33.33333% - 10px);
			max-width: calc(33.33333% - 10px);
		}
	}

	@media screen and (min-width: 1500px) {
		.zerrenda__item {
			flex: 1 0 calc(25% - 10px);
			max-width: calc(25% - 10px);
		}
	}

</style>